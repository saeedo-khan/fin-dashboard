'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Zod schema for form validation
const basicInfoSchema = z.object({
  invoiceDate: z.string().min(1, 'Invoice date is required'),
  dueDate: z.string().min(1, 'Due date is required'),
}).refine((data) => {
  const invoiceDate = new Date(data.invoiceDate);
  const dueDate = new Date(data.dueDate);
  return dueDate >= invoiceDate;
}, {
  message: 'Due date must be on or after invoice date',
  path: ['dueDate'],
});

type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

interface BasicInfoProps {
  onSendInvoice?: (data: BasicInfoFormData) => void;
  onPreview?: (data: BasicInfoFormData) => void;
  onDownload?: (data: BasicInfoFormData) => void;
  defaultValues?: Partial<BasicInfoFormData>;
}

export default function BasicInfo({ 
  onSendInvoice, 
  onPreview, 
  onDownload,
  defaultValues = {
    invoiceDate: '2022-04-14',
    dueDate: '2022-04-20',
  }
}: BasicInfoProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
  } = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues,
    mode: 'onChange',
  });

  const watchedInvoiceDate = watch('invoiceDate');
  const watchedDueDate = watch('dueDate');

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const onSubmit = (data: BasicInfoFormData) => {
    if (onSendInvoice) {
      onSendInvoice(data);
    }
  };

  const handlePreview = () => {
    const formData = watch();
    if (onPreview && isValid) {
      onPreview(formData);
    }
  };

  const handleDownload = () => {
    const formData = watch();
    if (onDownload && isValid) {
      onDownload(formData);
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 w-[375px] h-[413px] space-y-20">
      <h3 className="text-lg font-semibold text-foreground">
        Basic Info
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-20 mb-[30px]">
          <div className='space-y-15'>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Invoice Date
            </label>
            <div className="relative">
              <input
                type="date"
                {...register('invoiceDate')}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent ${
                  errors.invoiceDate ? 'border-destructive' : 'border-border'
                }`}
              />
            </div>
            
            {errors.invoiceDate && (
              <div className="mt-1 text-sm text-destructive">
                {errors.invoiceDate.message}
              </div>
            )}
          </div>

          <div className='space-y-15'>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Due Date
            </label>
            <div className="relative">
              <input
                type="date"
                {...register('dueDate')}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent ${
                  errors.dueDate ? 'border-destructive' : 'border-border'
                }`}
              />
            </div>
            
            {errors.dueDate && (
              <div className="mt-1 text-sm text-destructive">
                {errors.dueDate.message}
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Invoice
        </button>
      </form>

      <div className="flex gap-3">
        <button
          onClick={handlePreview}
          disabled={!isValid}
          className="flex-1 flex items-center justify-center gap-2 bg-grays-2  dark:text-secondary border border-border text-secondary py-2 px-4 rounded-lg hover:bg-muted transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-secondary font-medium">Preview</span>
        </button>
        
        <button
          onClick={handleDownload}
          disabled={!isValid}
          className="flex-1 flex items-center justify-center gap-2 bg-grays-2  dark:text-secondary border border-border text-secondary py-2 px-4 rounded-lg hover:bg-muted transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="text-secondary font-medium">Download</span>
        </button>
      </div>
    </div>
  );
}
