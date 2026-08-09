import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { RegistrationPhoenixLogo } from '../components/RegistrationPhoenixLogo'


const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  registrationNumber: z.string().min(1, 'University ID is required'),
  nameOnCertificate: z.string().min(1, 'Name on certificate is required'),
  batch: z.string().min(1, 'Batch is required'),
  faculty: z.string().min(1, 'Faculty is required'),
  department: z.string().min(1, 'Department is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9+\-\s()]+$/, 'Invalid phone number'),
  previousParticipation: z.enum(['yes', 'no']),
  hearAbout: z.string().min(1, 'Please select an option'),
  hearAboutOther: z.string().optional(),
  agreeToTerms: z.literal(true),
}).refine(
  (data) => {
    if (data.hearAbout === 'Other') {
      return !!data.hearAboutOther && data.hearAboutOther.length > 0;
    }
    return true;
  },
  {
    message: "Please specify how you heard about this competition",
    path: ["hearAboutOther"],
  }
);

type FormValues = z.infer<typeof formSchema>

export function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hearAbout: '',
    }
  })

  const watchAllFields = watch()
  const watchHearAbout = watchAllFields.hearAbout

  const requiredFields = [
    'firstName', 'lastName', 'registrationNumber', 'nameOnCertificate',
    'batch', 'faculty', 'department', 'email', 'phone',
    'previousParticipation', 'hearAbout'
  ];

  let filledCount = 0;
  requiredFields.forEach(field => {
    if (watchAllFields[field as keyof FormValues]) {
      filledCount++;
    }
  });

  if (watchAllFields.agreeToTerms) filledCount++;

  let totalFields = requiredFields.length + 1; // 11 + 1 = 12
  if (watchAllFields.hearAbout === 'Other') {
    totalFields++;
    if (watchAllFields.hearAboutOther) filledCount++;
  }

  const progress = filledCount / totalFields;

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setErrorMessage('')
    setSuccessMessage('')

    // Fail loudly and early rather than sending a request that cannot succeed.
    if (!isSupabaseConfigured) {
      setIsSubmitting(false)
      setErrorMessage(
        'Registration is temporarily unavailable. Please try again shortly, or contact the Gavel Club directly.'
      )
      return
    }

    try {
      const { error } = await supabase
        .from('registrations')
        .insert([
          {
            first_name: data.firstName,
            last_name: data.lastName,
            registration_number: data.registrationNumber,
            name_on_certificate: data.nameOnCertificate,
            batch: data.batch,
            faculty: data.faculty,
            department: data.department,
            email: data.email,
            phone: data.phone,
            previous_participation: data.previousParticipation,
            hear_about: data.hearAbout,
            hear_about_other: data.hearAboutOther || null
          }
        ])

      if (error) throw error

      setSuccessMessage('Registration submitted successfully! Welcome to Speech Olympiad!')
      reset()
    } catch (error: any) {
      // Log the detail for debugging, but never render a raw database message
      // to the user — those leak table, column and constraint names.
      console.error('Error submitting registration: ', error)
      setErrorMessage(
        error?.code === '23505'
          ? 'It looks like you have already registered with this email or university ID.'
          : 'Something went wrong submitting your registration. Please try again, or contact us if the problem continues.'
      )
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSuccessMessage('')
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <div className="w-full flex justify-center items-center mt-20 mb-10 relative">
      <RegistrationPhoenixLogo progress={progress} isSuccess={!!successMessage} />
      <div className="w-[90%] md:w-[80%] bg-[#121212]/10 md:bg-[#121212]/50 backdrop-blur-[3px] md:backdrop-blur-sm rounded-2xl p-8 shadow-2xl relative z-10">
        {/* This page's own <h1> — /register is standalone, so unlike About or
            TechTips it is not given a route-level sr-only title in App.tsx. */}
        <h1 className="heading-page text-white w-[80%]">
          Register Now
        </h1>
        <p className="mt-4 text-gray-300 leading-6 text-left text-lg font-thin">
          Registrations for{' '}
          <span className="font-bold text-ember">Speech Olympiad</span> are open now. Time to own your voice!
        </p>
        <p className="mt-1 text-gray-300 leading-6 text-left text-lg font-thin">
          Master the art of public speaking with our comprehensive{' '}
          <a
            href="https://drive.google.com/file/d/1q593UEqVGyOmJeEzJoMwOyjGEroa8Ksz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-ember hover:text-ember-mid hover:cursor-pointer transition-colors duration-200 font-bold underline"
          >
            Competition Guidelines
          </a>{' '}
          and expert tips to elevate your speaking skills!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
              <input
                id="firstName"
                autoComplete="given-name"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                {...register('firstName')}
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember"
              />
              {errors.firstName && <p id="firstName-error" role="alert" className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
              <input
                id="lastName"
                autoComplete="family-name"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                {...register('lastName')}
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember"
              />
              {errors.lastName && <p id="lastName-error" role="alert" className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* University ID */}
            <div>
              <label htmlFor="registrationNumber" className="block text-white mb-2">University ID</label>
              <input
                id="registrationNumber"
                autoComplete="off"
                aria-invalid={!!errors.registrationNumber}
                aria-describedby={errors.registrationNumber ? 'registrationNumber-error' : undefined}
                {...register('registrationNumber')}
                type="text"
                placeholder="University ID"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember"
              />
              {errors.registrationNumber && <p id="registrationNumber-error" role="alert" className="text-red-400 text-sm mt-1">{errors.registrationNumber.message}</p>}
            </div>

            {/* Name on Certificate */}
            <div>
              <label htmlFor="nameOnCertificate" className="block text-white mb-2">Name as it should appear on certificate</label>
              <input
                id="nameOnCertificate"
                autoComplete="name"
                aria-invalid={!!errors.nameOnCertificate}
                aria-describedby={errors.nameOnCertificate ? 'nameOnCertificate-error' : undefined}
                {...register('nameOnCertificate')}
                type="text"
                placeholder="Full Name for Certificate"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember"
              />
              {errors.nameOnCertificate && <p id="nameOnCertificate-error" role="alert" className="text-red-400 text-sm mt-1">{errors.nameOnCertificate.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Batch */}
            <div>
              <label htmlFor="batch" className="block text-white mb-2">Batch</label>
              <select
                id="batch"
                aria-invalid={!!errors.batch}
                aria-describedby={errors.batch ? 'batch-error' : undefined}
                {...register('batch')}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember appearance-none"
              >
                <option value="">Select Batch (22-25)</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
              </select>
              {errors.batch && <p id="batch-error" role="alert" className="text-red-400 text-sm mt-1">{errors.batch.message}</p>}
            </div>

            {/* Faculty */}
            <div>
              <label htmlFor="faculty" className="block text-white mb-2">Faculty</label>
              <select
                id="faculty"
                aria-invalid={!!errors.faculty}
                aria-describedby={errors.faculty ? 'faculty-error' : undefined}
                {...register('faculty')}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember appearance-none"
              >
                <option value="">Select Faculty</option>
                <option value="Engineering">Faculty of Engineering</option>
                <option value="Information Technology">Faculty of Information Technology</option>
                <option value="Business">Faculty of Business</option>
                <option value="Architecture">Faculty of Architecture</option>
                <option value="Medicine">Faculty of Medicine</option>
                <option value="Graduate Studies">Faculty of Graduate Studies</option>
              </select>
              {errors.faculty && <p id="faculty-error" role="alert" className="text-red-400 text-sm mt-1">{errors.faculty.message}</p>}
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-white mb-2">Department</label>
              <input
                id="department"
                autoComplete="organization-title"
                aria-invalid={!!errors.department}
                aria-describedby={errors.department ? 'department-error' : undefined}
                {...register('department')}
                type="text"
                placeholder="Department"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember"
              />
              {errors.department && <p id="department-error" role="alert" className="text-red-400 text-sm mt-1">{errors.department.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                id="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email')}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember"
              />
              {errors.email && <p id="email-error" role="alert" className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-white mb-2">Phone Number (WhatsApp)</label>
              <input
                id="phone"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                {...register('phone')}
                type="tel"
                placeholder="Your WhatsApp Number"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember"
              />
              {errors.phone && <p id="phone-error" role="alert" className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Previous Participation. fieldset/legend so the question is
              announced together with the radio options. */}
          <fieldset
            aria-invalid={!!errors.previousParticipation}
            aria-describedby={errors.previousParticipation ? 'previousParticipation-error' : undefined}
          >
            <legend className="block text-white mb-3">Have you already participated in Speech Olympiad?</legend>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-3 cursor-pointer text-white">
                <input
                  type="radio"
                  value="yes"
                  {...register('previousParticipation')}
                  className="w-5 h-5 text-ember focus:ring-ember bg-gray-800 border-gray-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer text-white">
                <input
                  type="radio"
                  value="no"
                  {...register('previousParticipation')}
                  className="w-5 h-5 text-ember focus:ring-ember bg-gray-800 border-gray-600"
                />
                <span>No</span>
              </label>
            </div>
            {errors.previousParticipation && <p id="previousParticipation-error" role="alert" className="text-red-400 text-sm mt-1">{errors.previousParticipation.message}</p>}
          </fieldset>

          {/* Hear About */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hearAbout" className="block text-white mb-2">How did you hear about this competition?</label>
              <select
                id="hearAbout"
                aria-invalid={!!errors.hearAbout}
                aria-describedby={errors.hearAbout ? 'hearAbout-error' : undefined}
                {...register('hearAbout')}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember appearance-none"
              >
                <option value="">Select an option</option>
                <option value="Gavel Club of UOM">Gavel Club of UOM</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
              {errors.hearAbout && <p id="hearAbout-error" role="alert" className="text-red-400 text-sm mt-1">{errors.hearAbout.message}</p>}
            </div>

            {/* Other option input */}
            {watchHearAbout === 'Other' && (
              <div>
                <label htmlFor="hearAboutOther" className="block text-white mb-2">Please specify</label>
                <input
                  id="hearAboutOther"
                  autoComplete="off"
                  aria-invalid={!!errors.hearAboutOther}
                  aria-describedby={errors.hearAboutOther ? 'hearAboutOther-error' : undefined}
                  {...register('hearAboutOther')}
                  type="text"
                  placeholder="Please specify"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-ember"
                />
                {errors.hearAboutOther && <p id="hearAboutOther-error" role="alert" className="text-red-400 text-sm mt-1">{errors.hearAboutOther.message}</p>}
              </div>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-3 pt-4">
            <input
              {...register('agreeToTerms')}
              type="checkbox"
              id="terms"
              className="mt-1 h-5 w-5 text-ember focus:ring-ember bg-gray-800 border-gray-600 rounded"
            />
            <label htmlFor="terms" className="text-gray-300 text-sm cursor-pointer">
              I confirm that I have read and agree to the{' '}
              <a href="/rules" className="text-ember underline hover:text-ember-mid">
                rules and regulations
              </a>
              , and I consent to share my information with authorized third parties for relevant purposes.
            </label>
          </div>
          {errors.agreeToTerms && <p id="agreeToTerms-error" role="alert" className="text-red-400 text-sm mt-1">{errors.agreeToTerms.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-ember-solid mt-4 h-14 w-full rounded-lg text-xl disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>

        {successMessage && (
          <div className="mt-6 p-4 bg-ember/20 border border-ember text-ember rounded-lg text-center font-semibold">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-6 p-4 bg-red-600/20 border border-red-500 text-red-400 rounded-lg text-center font-semibold">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  )
}
