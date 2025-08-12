import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const Menu = (props: {
  onSectionChange: (section: number) => void;
  menuOpened: boolean;
  setMenuOpened: (menuOpened: boolean) => void;
  currentSection: number;
}) => {
  const { onSectionChange, menuOpened, setMenuOpened, currentSection } = props;

  const menuItems = [
    {
      name: "Home",
      section: 0,
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "About",
      section: 1,
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
    {
      name: "Projects",
      section: 2,
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      name: "Contact",
      section: 3,
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
        className="fixed top-8 right-8 z-50 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={menuOpened ? "open" : "closed"}
          className="flex flex-col items-center justify-center w-6 h-6"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="w-5 h-0.5 bg-gray-800 rounded-full origin-center"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-5 h-0.5 bg-gray-800 rounded-full mt-1"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className="w-5 h-0.5 bg-gray-800 rounded-full mt-1 origin-center"
          />
        </motion.div>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {menuOpened && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              onClick={() => setMenuOpened(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "tween",
                ease: [0.25, 0.1, 0.25, 1],
                duration: 0.6,
              }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 border-l border-gray-200"
            >
              {/* Menu Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-8 border-b border-gray-100"
              >
                <p className="text-gray-600 mt-2">Explore my portfolio</p>
              </motion.div>

              {/* Menu Items */}
              <div className="p-6">
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <button
                        onClick={() => {
                          onSectionChange(item.section);
                          setMenuOpened(false);
                        }}
                        className={`w-full group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
                          currentSection === item.section
                            ? "bg-gradient-to-r from-blue-100 to-purple-100 shadow-md border border-blue-200"
                            : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                            currentSection === item.section
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                              : "bg-gradient-to-r from-blue-500 to-purple-500"
                          }`}
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={item.icon}
                            />
                          </svg>
                        </div>
                        <span
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            currentSection === item.section
                              ? "text-blue-700"
                              : "text-gray-800 group-hover:text-blue-600"
                          }`}
                        >
                          {item.name}
                        </span>
                      </button>
                    </motion.div>
                  ))}
                </nav>

                {/* Resume Download */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="mt-6 pt-6 border-t border-gray-100"
                >
                  <Link
                    href="/saurav_resume.pdf"
                    className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Resume
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
