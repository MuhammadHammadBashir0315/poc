'use client'

import React, { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ChevronsUpDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { AddArray } from '@/redux/features/projects-array-slice';

// Define the type of the data array
type Option = { label: string; value: string };

const accountFormSchema = z.object({
  selectedField: z.string().min(2, { message: 'Field must be at least 2 characters.' }).max(30, { message: 'Field must not be longer than 30 characters.' }),
});

interface AccountFormProps {
  data?: Option[]; // Use the defined Option type
  placeholder: string;
}

const AccountForm: React.FC<AccountFormProps> = (props) => {
  const { data = [] } = props;
  const { placeholder } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    dispatch(AddArray(projects));
  }, [dispatch, projects]);

  const defaultValues: Record<string, any> = {
    selectedField: '',
  };

  const form = useForm<Record<string, any>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const onSubmit = (formData: Record<string, any>) => {
    // console.log('Submitted data:', formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="selectedField"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn('w-[200px] justify-between', !field.value && 'text-muted-foreground')}
                    onClick={handleClick}
                  >
                    {field.value ? `${field.value}` : `Select ${placeholder}`}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder={`Search ${placeholder}...`} />
                    <CommandEmpty>{`No ${placeholder} found.`}</CommandEmpty>
                    <CommandGroup>
                      {data.map((item) => (
                        <CommandItem
                          key={item.value}
                          value={item.label}
                          onSelect={() => {
                            form.setValue('selectedField', item.label);
                            setOpen(false);
                            // Handle the selected item as needed
                          }}
                        >
                          {item.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
      </form>
    </Form>
  );
};

export default AccountForm;
