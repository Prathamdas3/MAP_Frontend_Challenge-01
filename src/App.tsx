import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ArrowLeft, SquarePen, SendHorizontal } from 'lucide-react'
import { Input } from './components/ui/input'
import ProfilePic from './components/avatar'
import DropDown from './components/dropdown'
import ToolTips from './components/tooltip'
import TextCards from './components/cards'
import { chat } from './types'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function App() {
  const fetchData = async ({ pageParam }: { pageParam: number }) => {
    const { data } = await axios.get(
      'https://qa.corider.in/assignment/chat?page=' + pageParam
    )
    return data
  }

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['chats'],
    queryFn: fetchData,
    initialPageParam: 0,
    getNextPageParam: (lastPage, lastPageParam) => {
      if (!lastPage) {
        return undefined
      }
      return lastPageParam.length + 1
    },
  })

  const date = new Date(data?.pages[0].chats[0].time)
  const newDate = `${date.getDate()} ${date.toLocaleDateString('en-US', {
    month: 'short',
  })}, ${date.getFullYear()}`

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  return (
    <main className="sm:container">
      <header className="fixed top-0 z-50 w-full px-4 py-5 space-y-4 bg-white sm:container ">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ArrowLeft size={24} />
            <p className="text-2xl font-bold leading-[30.12px]">
              {data?.pages[0].name}
            </p>
          </div>
          <SquarePen size={24} />
        </nav>
        <div className="flex items-center justify-between gap-3 ">
          <div className="flex gap-4">
            <ProfilePic
              src="https://github.com/shadcn.png"
              className="w-12 h-12"
            />
            <div>
              <p className="text-[#606060] text-[16px] font-medium leading-[20.08px]">
                From
                {'  '}
                <span className="text-lg font-bold leading-[22.59px] text-[#141E0D]">
                  {data?.pages[0].from}
                </span>
              </p>
              <p className="text-[#606060] ">
                To{' '}
                <span className="text-lg font-bold leading-[22.59px] text-[#141E0D]">
                  {data?.pages[0].to}
                </span>
              </p>
            </div>
          </div>
          <DropDown />
        </div>
      </header>

      <article className="relative h-screen px-4 py-5 overflow-y-auto hide_scrollbar top-36 ">
        <div className="flex items-center justify-center gap-3 mb-8 ">
          <div className="w-1/3 border sm:w-[45%]"></div>
          <p className="text-[#B7B7B7] leading-[17.57px] text-sm font-normal">
            {newDate}
          </p>
          <div className="w-1/3 border sm:w-[45%]"></div>
        </div>
        <div className="flex flex-col w-full gap-5">
          {data?.pages.map((page, index) => (
            <div className="flex flex-col gap-5" key={index}>
              {page.chats.map((chat: chat) => (
                <TextCards
                  key={chat.id}
                  src={chat.sender.image}
                  des={chat.message}
                  self={chat.sender.self}
                  verified={chat.sender.is_kyc_verified}
                />
              ))}
            </div>
          ))}

          <div ref={ref}></div>
        </div>
      </article>
      <footer className="fixed bottom-0 z-50 w-full px-4 py-2 bg-white sm:container">
        <div className="flex items-center gap-4 p-3">
          <Input
            placeholder="Reply to @Rohit Yadav"
            className=" placeholder:text-[#B7B7B7] border-none outline-none focus-visible:outline-none text-[#141E0D]  focus-visible:ring-0"
          />
          <ToolTips />
          <SendHorizontal size={20} />
        </div>
      </footer>
    </main>
  )
}
