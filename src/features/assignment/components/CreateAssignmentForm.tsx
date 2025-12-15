import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { DialogHeader } from '@/shared/components/ui/dialog';
import { useCreateAssignmentForm } from '../hooks/useCreateAssignmentForm';
import { Plus } from 'lucide-react';
import { useAssignmentUIStore } from '../stores/useAssignmentStore';
import { Button } from '@/shared/components/ui/button';

type Props = {
  classId: number;
};

const CreateAssignmentForm: React.FC<Props> = ({ classId }) => {
  const { title, setTitle, isError, isLoading, handleSubmit } = useCreateAssignmentForm( classId);
  const { isCreateDialogOpen, setCreateDialogOpen} = useAssignmentUIStore()

  return (
    <Dialog open={isCreateDialogOpen} onOpenChange={setCreateDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={'default'}>
            <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 p-4">
        <DialogHeader>
          <DialogTitle>Create New Assignment</DialogTitle>
          <DialogDescription>
            Enter the assignment title below and submit.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Assignment Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isLoading ? "Creating..." : "Create"}
          </button>
          {isError && (
            <p className="text-red-500">Error creating assignment</p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};


export default CreateAssignmentForm