import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
  ArrowLeft,
  SquarePen,
  EllipsisVertical,
  Users,
  Phone,
  MessageSquareX,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'

export default function App() {
  const { data } = useQuery({
    queryKey: ['chatData'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://qa.corider.in/assignment/chat?page=0'
      )
      return data
    },
  })
  console.log(data?.chats?.slice(0, 8))
  return (
    <main className="p-4">
      <header className="py-5 space-y-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ArrowLeft size={24} />
            <p className="text-2xl font-bold leading-[30.12px]">Trip 1</p>
          </div>
          <SquarePen size={24} />
        </nav>
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                height={48}
                width={48}
                className=""
                alt="group logo"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[#606060] text-[16px] font-medium leading-[20.08px]">
                From
                {'  '}
                <span className="text-lg font-bold leading-[22.59px] text-[#141E0D]">
                  IGI Airport, T3
                </span>
              </p>
              <p className="text-[#606060] ">
                To{' '}
                <span className="text-lg font-bold leading-[22.59px] text-[#141E0D]">
                  Sector 28
                </span>
              </p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="relative -left-4 w-[156px]">
              <DropdownMenuLabel className="flex gap-1 items-center text-sm font-semibold leading-[17.57px] text-[#141E0D] py-[14px] px-3">
                <Users size={20} />
                Members
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="flex gap-1 items-center text-sm font-semibold leading-[17.57px] text-[#141E0D] py-[14px] px-3">
                <Phone size={20} />
                Share Number
              </DropdownMenuLabel>
              <DropdownMenuSeparator color="#E5E5E0" />
              <DropdownMenuLabel className="flex gap-1 items-center text-sm font-semibold leading-[17.57px] text-[#141E0D] py-[14px] px-3">
                <MessageSquareX size={20} />
                Report
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </main>
  )
}
