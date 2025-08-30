import { useState } from 'react'
import { Plus, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import DropMenu from './DropMenu'

import { useTodo } from '@/context'

import { TODO_CONFIG } from '@/constants/todoConfig'

export default function TaskForm({ mode, dialogTitle, dialogDesc, id = null, completed=false }) {
  const [open, setOpen] = useState(false)
  const [inputPriority, setInputPriority] = useState(TODO_CONFIG.FORM.DEFAULT_VALUES.PRIORITY)
  const [inputTaskTitle, setInputTaskTitle] = useState(TODO_CONFIG.FORM.DEFAULT_VALUES.TITLE)
  const [inputTaskDesc, setInputTaskDesc] = useState(TODO_CONFIG.FORM.DEFAULT_VALUES.DESCRIPTION)

  const { addTodo, editTodo } = useTodo()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputTaskTitle.trim() && inputTaskDesc.trim()) {
      setOpen(false)
      mode === 'add'
        ? addTodo({
            id: Date.now(),
            todoTitle: inputTaskTitle,
            todoDesc: inputTaskDesc,
            todoPriority: inputPriority,
            isCompleted: false,
          })
        : editTodo(id, {
            id,
            todoTitle: inputTaskTitle,
            todoDesc: inputTaskDesc,
            todoPriority: inputPriority,
            isCompleted: false,
          })
      setInputTaskTitle(TODO_CONFIG.FORM.DEFAULT_VALUES.TITLE)
      setInputTaskDesc(TODO_CONFIG.FORM.DEFAULT_VALUES.DESCRIPTION)
      setInputPriority(TODO_CONFIG.FORM.DEFAULT_VALUES.PRIORITY)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild >
        {mode === 'add' ? (
          <Button
            variant="outline"
            className="w-40 bg-sky-500 py-5 text-lg text-sky-50 hover:bg-sky-400 hover:text-sky-50"
          >
            Add Tasks <Plus />
          </Button>
        ) : (
          completed === false && (
            <Pencil className="size-5 cursor-pointer" />
          ) 
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDesc}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Inputs */}
          <div className="grid gap-3">
            <Label htmlFor="task-name">Task Name</Label>
            <Input
              id="task-name"
              name="task-name"
              value={inputTaskTitle}
              onChange={(e) => setInputTaskTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="task-desc">Description</Label>
            <Input
              id="task-desc"
              name="task-desc"
              value={inputTaskDesc}
              onChange={(e) => setInputTaskDesc(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label>Task Priority</Label>
            <DropMenu
              inputPriority={inputPriority}
              setInputPriority={setInputPriority}
            />
          </div>

          <DialogFooter>
            <Button onClick={() => setOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
