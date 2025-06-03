import { motion } from 'framer-motion'

const FeatureCard = ({ title, description, icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300"
    >
      <div className="p-6">
        <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-5`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureCard