import React from 'react';
import { motion } from 'framer-motion';
import Card from './common/Card';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function Hero() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-12 px-4"
    >
      <motion.div variants={item} className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Create and Manage Your Events
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Build memorable events with ease. Create interactive Q&As, polls, and surveys.
          Invite participants and track responses in real-time.
        </p>
      </motion.div>
      
      <motion.div 
        variants={container}
        className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto"
      >
        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Q&A Sessions</h3>
              <p className="text-muted-foreground">
                Host interactive Q&A sessions with real-time responses and moderation.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Live Polls</h3>
              <p className="text-muted-foreground">
                Create engaging polls and get instant feedback from your audience.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Surveys</h3>
              <p className="text-muted-foreground">
                Design comprehensive surveys with multiple question types.
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

export default Hero;