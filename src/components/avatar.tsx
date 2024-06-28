import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function ProfilePic({
  src,
  width,
  height,
}: {
  src: string
  width: number
  height: number
}) {
  return (
    <Avatar>
      <AvatarImage
        src={src}
        height={height}
        width={width}
        className=""
        alt="group logo"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
