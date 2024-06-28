import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { Camera, Video, Paperclip } from 'lucide-react'

export default function ToolTips() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Paperclip size={16} />
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-4 rounded-full bg-[#008000] py-3 px-4">
          <Camera size={20} />
          <Video size={20} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
