'use client'
// @ts-nocheck 
import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger
 {/* @ts-ignore */}
const AlertDialogPortal = ({
  // @ts-ignore 
  className,
  children,
  ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal 
  // @ts-ignore 
  className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {children}
    </div>
  </AlertDialogPrimitive.Portal>
)
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ 
    // @ts-ignore 
  className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    // @ts-ignore 
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in',
        // @ts-ignore 
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ 
    // @ts-ignore 
    className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
        // @ts-ignore 
      className={cn(
        'fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full',
          // @ts-ignore 
          className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
    // @ts-ignore 
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    // @ts-ignore 
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
        // @ts-ignore 
        className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'

const AlertDialogFooter = ({
    // @ts-ignore 
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
     // @ts-ignore 
      className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
       // @ts-ignore 
        className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ 
    // @ts-ignore 
    className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
      // @ts-ignore 
      className={cn('text-lg font-semibold', 
      
        // @ts-ignore 
        className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({
    // @ts-ignore 
     className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
      // @ts-ignore 
      
    className={cn('text-sm text-muted-foreground', 
      // @ts-ignore 
      className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({
    // @ts-ignore 
     className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
     // @ts-ignore 
      className={cn(buttonVariants(), 
          // @ts-ignore 
          className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({
    // @ts-ignore 
     className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
      // @ts-ignore 
      className={cn(
      buttonVariants({ variant: 'outline' }),
      'mt-2 sm:mt-0',
        // @ts-ignore 
        className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
}
