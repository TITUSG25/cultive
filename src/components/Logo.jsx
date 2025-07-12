import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cultive_logo from "../assets/cultive_logo.svg";

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
        <div className="flex-shrink-0 flex-direction">
          <img src={cultive_logo} alt="Cultive Logo" className="w-50 h-20" />
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo;
