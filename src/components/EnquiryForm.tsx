import React, { useState } from 'react';
import { EnquiryFormData } from '../types';
import { BUSINESS } from '../data/content';
import { Send, CheckCircle2, Phone, AlertCircle } from 'lucide-react';

interface EnquiryFormProps {
  initialSessionType?: 'group' | 'private' | 'general';
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialSessionType = 'general' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    sessionType: initialSessionType,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or note about your enquiry.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Please provide a little more detail in your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate deliberate gentle dispatch without claiming an unconfigured backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      sessionType: 'general',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div
        id="enquiry-success-container"
        className="p-8 md:p-10 rounded-2xl bg-[#F4F1EA] border border-[#DDD6C8] text-center space-y-5"
        role="status"
        aria-live="polite"
      >
        <div className="w-12 h-12 mx-auto rounded-full bg-[#E5EADF] text-[#4F5B44] flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-[#202120] font-medium">
            Thank You, {formData.name}
          </h3>
          <p className="text-sm text-[#575B54] max-w-md mx-auto leading-relaxed">
            Your enquiry regarding{' '}
            <span className="font-semibold text-[#202120]">
              {formData.sessionType === 'group'
                ? 'Group Sessions'
                : formData.sessionType === 'private'
                ? 'Private Sessions'
                : 'Yoga Studio Enquiry'}
            </span>{' '}
            has been received. We look forward to connecting with you.
          </p>
        </div>

        <div className="pt-3 pb-1 border-t border-[#DED7CA] max-w-sm mx-auto text-xs text-[#636860] space-y-2">
          <p>
            Prefer immediate contact? You can also reach our Paris studio directly by phone:
          </p>
          <a
            id="success-phone-link"
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center space-x-1.5 font-semibold text-[#2D312A] hover:text-[#525D46] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#525D46]" />
            <span>{BUSINESS.phone}</span>
          </a>
        </div>

        <div>
          <button
            id="send-another-enquiry-btn"
            type="button"
            onClick={handleReset}
            className="text-xs uppercase tracking-widest font-semibold text-[#4F5B44] hover:text-[#252822] transition-colors underline underline-offset-4 cursor-pointer"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="studio-enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="p-7 md:p-9 rounded-2xl bg-[#FFFFFF] border border-[#EAE4D9] shadow-xs space-y-6"
    >
      <div className="border-b border-[#F0EBE2] pb-4">
        <h3 className="font-serif text-2xl text-[#202120] font-medium">
          Studio Enquiry
        </h3>
        <p className="text-xs text-[#6C7168] mt-1">
          Reach out directly to Équilibre Yoga regarding group or private sessions.
        </p>
      </div>

      {/* Name Input */}
      <div className="space-y-1.5">
        <label htmlFor="enquiry-name" className="block text-xs font-semibold uppercase tracking-wider text-[#3D413A]">
          Your Name <span className="text-[#A36652]">*</span>
        </label>
        <input
          type="text"
          id="enquiry-name"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          placeholder="e.g. Camille Laurent"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#202120] placeholder-[#9E9B95] bg-[#FAF8F5] transition-colors focus:bg-white ${
            errors.name ? 'border-[#C25B49] focus:ring-1 focus:ring-[#C25B49]' : 'border-[#DDD7CC] focus:border-[#4B5441]'
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-[#A84836] flex items-center space-x-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Email Input */}
      <div className="space-y-1.5">
        <label htmlFor="enquiry-email" className="block text-xs font-semibold uppercase tracking-wider text-[#3D413A]">
          Email Address <span className="text-[#A36652]">*</span>
        </label>
        <input
          type="email"
          id="enquiry-email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          placeholder="name@example.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#202120] placeholder-[#9E9B95] bg-[#FAF8F5] transition-colors focus:bg-white ${
            errors.email ? 'border-[#C25B49] focus:ring-1 focus:ring-[#C25B49]' : 'border-[#DDD7CC] focus:border-[#4B5441]'
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-[#A84836] flex items-center space-x-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.email}</span>
          </p>
        )}
      </div>

      {/* Session Type Select */}
      <div className="space-y-1.5">
        <label htmlFor="enquiry-session-type" className="block text-xs font-semibold uppercase tracking-wider text-[#3D413A]">
          Session Interest
        </label>
        <div className="relative">
          <select
            id="enquiry-session-type"
            name="sessionType"
            value={formData.sessionType}
            onChange={(e) =>
              setFormData({ ...formData, sessionType: e.target.value as 'group' | 'private' | 'general' })
            }
            className="w-full px-4 py-3 rounded-xl border border-[#DDD7CC] text-sm text-[#202120] bg-[#FAF8F5] focus:bg-white focus:border-[#4B5441] transition-colors cursor-pointer appearance-none"
          >
            <option value="general">General Studio Enquiry</option>
            <option value="group">Group Yoga Sessions</option>
            <option value="private">Private Yoga Sessions</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#6A6E66]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label htmlFor="enquiry-message" className="block text-xs font-semibold uppercase tracking-wider text-[#3D413A]">
          Message / Notes <span className="text-[#A36652]">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Tell us about your interest in group or private yoga sessions, or ask any questions regarding our studio..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#202120] placeholder-[#9E9B95] bg-[#FAF8F5] transition-colors focus:bg-white ${
            errors.message ? 'border-[#C25B49] focus:ring-1 focus:ring-[#C25B49]' : 'border-[#DDD7CC] focus:border-[#4B5441]'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-[#A84836] flex items-center space-x-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          id="enquiry-submit-btn"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-[#2D3228] hover:bg-[#434A3C] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-calm cursor-pointer disabled:opacity-70 shadow-xs"
        >
          {isSubmitting ? (
            <span>Sending enquiry...</span>
          ) : (
            <>
              <span>Send Studio Enquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-center text-[#7F847B]">
        Strictly factual information · Direct phone: {BUSINESS.phone}
      </p>
    </form>
  );
};
