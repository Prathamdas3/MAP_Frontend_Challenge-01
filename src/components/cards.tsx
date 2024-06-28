import ProfilePic from './avatar'
import { BadgeCheck } from 'lucide-react'

export default function TextCards({
  des,
  src,
  self,
  verified,
}: {
  des: string
  src: string
  self: boolean
  verified: boolean
}) {
  return (
    <section className="flex gap-2 ">
      {!self && (
        <div>
          <ProfilePic src={src} height={24} width={24} />
          {verified && (
            <BadgeCheck
              size={16}
              className="relative z-1 left-[70%] -top-4"
              color="#fff"
              fill="#1C63D5"
            />
          )}
        </div>
      )}
      <div
        className={` p-2 rounded-xl  text-wrap w-72 drop-shadow-xl ${
          self
            ? 'rounded-br-none bg-[#1C63D5] text-white relative -right-[4.4rem]'
            : 'rounded-tl-none text-[##606060] '
        } `}
      >
        <p className="leading-[17.57px] text-sm font-normal text-justify">
          {des}
        </p>
      </div>
    </section>
  )
}
