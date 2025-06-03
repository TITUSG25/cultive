import { motion } from 'framer-motion'

const TestimonialCard = ({ quote, name, title, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300"
    >
      <div className="p-6">
        {/* Quote */}
        <div className="mb-6 text-primary-500">
          <svg className="w-10 h-10 opacity-25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        {/* Quote Text */}
        <p className="text-gray-700 mb-6">"{quote}"</p>
        
        {/* Author Info */}
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <img 
              className="w-12 h-12 rounded-full object-cover" 
              src={image} 
              alt={name} 
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-gray-600 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard