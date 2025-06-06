import React from 'react';
import { Trophy, Users, Code, Calendar, Target, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Activities: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const activities = [
    {
      title: "Coding Contest Organizer",
      organization: "Trinity College of Engineering",
      date: "2024",
      type: "Leadership",
      description: "Organized and coordinated multiple coding competitions for students, creating problem statements and managing event logistics.",
      impact: "Engaged 150+ students in competitive programming",
      icon: Code,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Poster Making Contest Coordinator",
      organization: "Trinity College of Engineering",
      date: "2023-2024",
      type: "Event Management",
      description: "Led the organization of creative poster-making competitions, focusing on technology and innovation themes.",
      impact: "Promoted creativity among 100+ participants",
      icon: Star,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Web Rider Competition Participant",
      organization: "PCCOE (Pimpri Chinchwad College of Engineering)",
      date: "2023",
      type: "Competition",
      description: "Participated in inter-collegiate web development competition, showcasing full-stack development skills.",
      impact: "Ranked in top 20 among 200+ participants",
      icon: Trophy,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tech Community Member",
      organization: "Various Tech Communities",
      date: "2022-Present",
      type: "Community",
      description: "Active member of various tech communities, participating in hackathons, workshops, and knowledge-sharing sessions.",
      impact: "Contributed to open-source projects",
      icon: Users,
      color: "from-green-500 to-teal-500"
    }
  ];

  const achievements = [
    { label: "Events Organized", value: "5+", icon: Calendar },
    { label: "Students Engaged", value: "300+", icon: Users },
    { label: "Competitions Won", value: "3", icon: Trophy },
    { label: "Years Active", value: "3+", icon: Target }
  ];

  return (
    <section id="activities" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Extra-Curricular Activities
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leadership, community involvement, and achievements beyond academics
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 rounded-xl p-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Activities Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />

            <div className="space-y-8">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row items-start md:items-center"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-6 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-purple-500 rounded-full z-10" />

                    {/* Content Card */}
                    <div className="w-full md:ml-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${activity.color}`} />
                      
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <div className={`p-2 bg-gradient-to-r ${activity.color} rounded-lg mr-3`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {activity.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {activity.organization}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              {activity.date}
                            </span>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${activity.color} text-white`}>
                              {activity.type}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {activity.description}
                        </p>

                        <div className="flex items-center text-sm">
                          <Target className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="font-semibold text-purple-600 dark:text-purple-400">
                            Impact: {activity.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;