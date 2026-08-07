import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { supabase } from '../lib/supabase'
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

      console.log('Registration submitted with data: ', data)
      setSuccessMessage('Registration submitted successfully! Welcome to Speech Olympiad!')
      reset()
    } catch (error: any) {
      console.error('Error submitting registration: ', error)
      setErrorMessage('Error submitting registration: ' + error.message)
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
        <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight w-[80%]">
          Register Now
        </h2>
        <p className="mt-4 text-gray-300 leading-6 text-left text-lg font-thin">
          Registrations for{' '}
          <span className="font-bold text-[#EDC001]">Speech Olympiad</span> are open now. Time to own your voice!
        </p>
        <p className="mt-1 text-gray-300 leading-6 text-left text-lg font-thin">
          Master the art of public speaking with our comprehensive{' '}
          <a
            href="https://drive.google.com/file/d/1q593UEqVGyOmJeEzJoMwOyjGEroa8Ksz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-[#EDC001] hover:text-yellow-300 hover:cursor-pointer transition-colors duration-200 font-bold underline"
          >
            Competition Guidelines
          </a>{' '}
          and expert tips to elevate your speaking skills!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-white mb-2">First Name</label>
              <input
                {...register('firstName')}
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-white mb-2">Last Name</label>
              <input
                {...register('lastName')}
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* University ID */}
            <div>
              <label className="block text-white mb-2">University ID</label>
              <input
                {...register('registrationNumber')}
                type="text"
                placeholder="University ID"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.registrationNumber && <p className="text-red-400 text-sm mt-1">{errors.registrationNumber.message}</p>}
            </div>

            {/* Name on Certificate */}
            <div>
              <label className="block text-white mb-2">Name as it should appear on certificate</label>
              <input
                {...register('nameOnCertificate')}
                type="text"
                placeholder="Full Name for Certificate"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.nameOnCertificate && <p className="text-red-400 text-sm mt-1">{errors.nameOnCertificate.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Batch */}
            <div>
              <label className="block text-white mb-2">Batch</label>
              <select
                {...register('batch')}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
              >
                <option value="">Select Batch (22-25)</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
              </select>
              {errors.batch && <p className="text-red-400 text-sm mt-1">{errors.batch.message}</p>}
            </div>

            {/* Faculty */}
            <div>
              <label className="block text-white mb-2">Faculty</label>
              <select
                {...register('faculty')}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
              >
                <option value="">Select Faculty</option>
                <option value="Engineering">Faculty of Engineering</option>
                <option value="Information Technology">Faculty of Information Technology</option>
                <option value="Business">Faculty of Business</option>
                <option value="Architecture">Faculty of Architecture</option>
                <option value="Medicine">Faculty of Medicine</option>
                <option value="Graduate Studies">Faculty of Graduate Studies</option>
              </select>
              {errors.faculty && <p className="text-red-400 text-sm mt-1">{errors.faculty.message}</p>}
            </div>

            {/* Department */}
            <div>
              <label className="block text-white mb-2">Department</label>
              <input
                {...register('department')}
                type="text"
                placeholder="Department"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.department && <p className="text-red-400 text-sm mt-1">{errors.department.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                {...register('email')}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white mb-2">Phone Number (WhatsApp)</label>
              <input
                {...register('phone')}
                type="tel"
                placeholder="Your WhatsApp Number"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Previous Participation */}
          <div>
            <label className="block text-white mb-3">Have you already participated in Speech Olympiad?</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-3 cursor-pointer text-white">
                <input
                  type="radio"
                  value="yes"
                  {...register('previousParticipation')}
                  className="w-5 h-5 text-yellow-500 focus:ring-yellow-500 bg-gray-800 border-gray-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer text-white">
                <input
                  type="radio"
                  value="no"
                  {...register('previousParticipation')}
                  className="w-5 h-5 text-yellow-500 focus:ring-yellow-500 bg-gray-800 border-gray-600"
                />
                <span>No</span>
              </label>
            </div>
            {errors.previousParticipation && <p className="text-red-400 text-sm mt-1">{errors.previousParticipation.message}</p>}
          </div>

          {/* Hear About */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">How did you hear about this competition?</label>
              <select
                {...register('hearAbout')}
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
              >
                <option value="">Select an option</option>
                <option value="Gavel Club of UOM">Gavel Club of UOM</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
              {errors.hearAbout && <p className="text-red-400 text-sm mt-1">{errors.hearAbout.message}</p>}
            </div>

            {/* Other option input */}
            {watchHearAbout === 'Other' && (
              <div>
                <label className="block text-white mb-2">Please specify</label>
                <input
                  {...register('hearAboutOther')}
                  type="text"
                  placeholder="Please specify"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.hearAboutOther && <p className="text-red-400 text-sm mt-1">{errors.hearAboutOther.message}</p>}
              </div>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-3 pt-4">
            <input
              {...register('agreeToTerms')}
              type="checkbox"
              id="terms"
              className="mt-1 h-5 w-5 text-yellow-500 focus:ring-yellow-500 bg-gray-800 border-gray-600 rounded"
            />
            <label htmlFor="terms" className="text-gray-300 text-sm cursor-pointer">
              I confirm that I have read and agree to the{' '}
              <a href="/rules" className="text-[#EDC001] underline hover:text-yellow-300">
                rules and regulations
              </a>
              , and I consent to share my information with authorized third parties for relevant purposes.
            </label>
          </div>
          {errors.agreeToTerms && <p className="text-red-400 text-sm mt-1">{errors.agreeToTerms.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-[#a78e1d] text-gray-100 rounded-lg hover:bg-[#7d6c22] transition-colors hover:text-white font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>

        {successMessage && (
          <div className="mt-6 p-4 bg-[#EDC001]/20 border border-[#EDC001] text-[#EDC001] rounded-lg text-center font-semibold">
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
import { useEffect } from 'react'
