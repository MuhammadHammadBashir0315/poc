import React, { useState , useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { AddArray } from '@/redux/features/projects-array-slice';

const accountFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(30, { message: 'Name must not be longer than 30 characters.' }),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  language: z.any({
    required_error: 'Please select a language.',
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// ... (previous imports)

interface AccountFormProps {
    data?: Array<{ ID?: number; Name?: string; Desc?: string; }> | null;
    placeholder: string;
  }
  
  const AccountForm: React.FC<AccountFormProps> = (props: any) => {
    const { data = [] } = props.data;
    const {placeholder} = props
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState([])

    console.log("in form",data)
    console.log("projects", projects)
    
   
    
  
    const defaultValues: Record<string, any> = {
      name: '',
      dob: null,
      selectedField: '', // Use a fixed field name or adjust as needed
    };
  
    const form = useForm<Record<string, any>>({
      resolver: zodResolver(accountFormSchema),
      defaultValues,
    });
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    const onSubmit = (formData: Record<string, any>) => {
      // Handle form submission
      console.log('Submitted data:', formData);
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
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
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
                        {Array.isArray(data) &&
                          data.map((item) => (
                            <CommandItem
                              key={item.ID}
                              value={item.Name}
                              onSelect={() => {
                                form.setValue('selectedField', item.Name);
                                setOpen(false);
                                // setProjects(item.Projects)
                              }}
                            >
                              {`${item.Name}`}
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

