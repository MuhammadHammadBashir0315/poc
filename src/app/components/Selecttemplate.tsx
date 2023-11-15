// import React from 'react'

// function Selecttemplate() {
//   return (
//     <div>
//       <FormField
//           control={form.control}
//           name="language"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <label>Language</label>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       className={cn(
//                         "w-[200px] justify-between",
//                         !field.value && "text-muted-foreground"
//                       )}
//                     >
//                       {field.value
//                         ? languages.find(
//                             (language) => language.value === field.value
//                           )?.label
//                         : "Select language"}
//                       <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-[200px] p-0">
//                   <Command>
//                     <CommandInput placeholder="Search language..." />
//                     <CommandEmpty>No language found.</CommandEmpty>
//                     <CommandGroup>
//                       {languages.map((language) => (
//                         <CommandItem
//                           value={language.label}
//                           key={language.value}
//                           onSelect={() => {
//                             form.setValue("language", language.value)
//                           }}
//                         >
//                           <CheckIcon
//                             className={cn(
//                               "mr-2 h-4 w-4",
//                               language.value === field.value
//                                 ? "opacity-100"
//                                 : "opacity-0"
//                             )}
//                           />
//                           {language.label}
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>
//               <FormDescription>
//                 This is the language that will be used in the dashboard.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//     </div>
//   )
// }

// export default Selecttemplate


