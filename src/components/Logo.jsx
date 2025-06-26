import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import cultiveArrow from '../assets/arrow.svg'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        {/* Logo Icon */}
        <div className="flex-shrink-0">
          <img src={cultiveArrow} alt="Cultive Logo" className="w-14 h-14" />
        </div>
        
        {/* Logo Text */}
        <div className="flex flex-col leading-tight">
          <span className="font-serif font-bold text-2xl text-gray-900">
            Cultive
          </span>
          <span className="font-sans font-medium text-base text-gray-700 -mt-1">
            the solution ocean
          </span>
        </div>
      </motion.div>
    </Link>
  )
}

export default Logo