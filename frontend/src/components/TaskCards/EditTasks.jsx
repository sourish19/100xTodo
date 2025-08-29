import { Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import DropMenu from '../AddTasks/DropMenu'

export default function EditTasks() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil className="h-5 w-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Tasks</DialogTitle>
          <DialogDescription>Make your changes here.</DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="task-title">Task Name</Label>
              <Input
                id="task-title"
                name="task-title"
                defaultValue="studying"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="task-desc">Task Description</Label>
              <Input
                id="task-desc"
                name="task-desc"
                defaultValue="Just Study..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="task-desc">Priority</Label>
              <DropMenu />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
