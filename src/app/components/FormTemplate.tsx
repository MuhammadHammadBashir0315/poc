"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"

import { Button } from "@/components/ui/button"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover"
// import { toast } from "@/registry/new-york/ui/use-toast"/

// const languages = [
//   { label: "ORG 1", value: "org1" },
//   { label: "ORG 2", value: "org2" },
//   { label: "ORG 3", value: "org3" },
//   { label: "ORG 4", value: "org4" },
//   { label: "ORG 5", value: "org5" },
//   { label: "ORG 6", value: "org6" },
//   { label: "ORG 7", value: "org7" },
//   { label: "ORG 8", value: "org8" },
//   { label: "ORG 9", value: "org9" },
// ] as const

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  language: z.any({
    required_error: "Please select a language.",
  }),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function AccountForm(props :any) {

    const [open, setOpen] = useState(false)
    
    const [languages] = props.languages
    // console.log("in template")
    // console.log(languages)
    // console.log("in template after language")
  
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })
  const handleClick = (e:any)=>{
    setOpen(!open)
  }

  function onSubmit(data: AccountFormValues) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              {/* <FormLabel>Language</FormLabel> */}
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? props.languages.find(
                            (language:any) => language.value === field.value
                          )?.label
                        : `${props.name}`}
                      <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">

                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {props.languages.map((language:any) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue("language", language.value)
                            setOpen(false)
                            
                          }}
                          
                        >
                          <CheckIcon
                            className={cn(
                              "mr-2 h-4 w-4",
                              language.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {language.label}
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
  )
}