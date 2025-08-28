import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const UserProfile = () => {
  return (
    <div className="cursor-pointer rounded-full p-1 outline-2 outline-emerald-300">
      <Avatar className={''}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default UserProfile
