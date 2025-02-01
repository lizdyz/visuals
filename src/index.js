import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { 
  Brain, Network, Book, Code, Target, GitBranch, Database,
  Settings, Users, Shield, Heart, Zap, Globe, Sparkles,
  ChevronDown, ChevronRight, ArrowRight, TrendingUp,
  Clock, LayoutGrid, Building2
} from 'lucide-react';

// Icon mapping to ensure we always have a valid icon
const IconMap = {
  Brain, Network, Book, Code, Target, GitBranch, Database,
  Settings, Users, Shield, Heart, Zap, Globe, Sparkles,
  ChevronDown, ChevronRight, ArrowRight, TrendingUp,
  Clock, Layout: LayoutGrid, Building2
};

const CompleteSweetBOSExplorer = () => {
  const [expandedSections, setExpandedSections] = useState(new Set(['bots', 'frameworks']));
  const [selectedDetail, setSelectedDetail] = useState(null);

  const completeSystem = {
    domains: {
      title: "Business Domains",
      icon: IconMap.Building2,
      color: "orange",
      components: [
        {
          name: "Strategy & Innovation",
          icon: IconMap.Sparkles,
          description: "Strategic direction and innovation management",
          capabilities: [
            "Strategic Planning",
            "Innovation Pipeline",
            "Growth Management",
            "Future Development"
          ],
          frameworks: ["OCDA", "Coevolution"],
          valueStreams: ["Strategic Value", "Innovation Value"]
        },
        {
          name: "Operations & Delivery",
          icon: IconMap.Settings,
          description: "Operational excellence and delivery management",
          capabilities: [
            "Process Optimization",
            "Resource Management",
            "Quality Control",
            "Delivery Excellence"
          ],
          frameworks: ["4D", "Business Architecture"],
          valueStreams: ["Operational Value", "Delivery Value"]
        },
        {
          name: "Market & Customer",
          icon: IconMap.Users,
          description: "Market engagement and customer success",
          capabilities: [
            "Market Analysis",
            "Customer Experience",
            "Relationship Management",
            "Value Delivery"
          ],
          frameworks: ["OCDA", "4D"],
          valueStreams: ["Market Value", "Customer Value"]
        },
        {
          name: "People & Culture",
          icon: IconMap.Heart,
          description: "Human capital and cultural development",
          capabilities: [
            "Talent Development",
            "Culture Building",
            "Team Dynamics",
            "Growth Support"
          ],
          frameworks: ["Coevolution", "Gestalt"],
          valueStreams: ["Human Value", "Cultural Value"]
        },
        {
          name: "Technology & Systems",
          icon: IconMap.Code,
          description: "Technical infrastructure and systems",
          capabilities: [
            "System Architecture",
            "Technical Integration",
            "Platform Development",
            "Infrastructure Management"
          ],
          frameworks: ["4D", "Business Architecture"],
          valueStreams: ["Technical Value", "System Value"]
        },
        {
          name: "Finance & Resources",
          icon: IconMap.Database,
          description: "Financial management and resource optimization",
          capabilities: [
            "Financial Planning",
            "Resource Allocation",
            "Cost Management",
            "Value Optimization"
          ],
          frameworks: ["OCDA", "Business Architecture"],
          valueStreams: ["Financial Value", "Resource Value"]
        },
        {
          name: "Product & Services",
          icon: IconMap.Layout,
          description: "Product development and service delivery",
          capabilities: [
            "Product Strategy",
            "Service Design",
            "Innovation Management",
            "Quality Assurance"
          ],
          frameworks: ["4D", "Coevolution"],
          valueStreams: ["Product Value", "Service Value"]
        },
        {
          name: "Partnerships & Ecosystems",
          icon: IconMap.Network,
          description: "Partnership management and ecosystem development",
          capabilities: [
            "Partnership Strategy",
            "Ecosystem Development",
            "Value Co-creation",
            "Network Enhancement"
          ],
          frameworks: ["Coevolution", "Business Architecture"],
          valueStreams: ["Partnership Value", "Ecosystem Value"]
        }
      ]
    },
    ocda: {
      title: "OCDA Framework",
      icon: IconMap.Target,
      color: "indigo",
      components: [
        {
          name: "Options",
          icon: IconMap.Globe,
          description: "Possibility space exploration",
          stages: [
            {
              name: "Generation",
              activities: ["Pattern Recognition", "Possibility Mapping", "Alternative Creation"]
            },
            {
              name: "Analysis",
              activities: ["Option Evaluation", "Impact Assessment", "Feasibility Study"]
            },
            {
              name: "Enhancement",
              activities: ["Option Refinement", "Combination Exploration", "Value Potential"]
            }
          ],
          valueCreation: ["Option Value", "Possibility Space", "Alternative Paths"]
        },
        {
          name: "Choices",
          icon: IconMap.GitBranch,
          description: "Decision point analysis",
          stages: [
            {
              name: "Evaluation",
              activities: ["Criteria Definition", "Option Assessment", "Value Analysis"]
            },
            {
              name: "Comparison",
              activities: ["Trade-off Analysis", "Risk Assessment", "Benefit Mapping"]
            },
            {
              name: "Selection",
              activities: ["Priority Setting", "Choice Optimization", "Path Selection"]
            }
          ],
          valueCreation: ["Choice Quality", "Decision Value", "Selection Optimization"]
        },
        {
          name: "Decisions",
          icon: IconMap.Target,
          description: "Commitment and direction setting",
          stages: [
            {
              name: "Commitment",
              activities: ["Resource Allocation", "Direction Setting", "Stakeholder Alignment"]
            },
            {
              name: "Planning",
              activities: ["Implementation Design", "Resource Planning", "Timeline Setting"]
            },
            {
              name: "Communication",
              activities: ["Stakeholder Engagement", "Change Management", "Vision Sharing"]
            }
          ],
          valueCreation: ["Decision Impact", "Direction Clarity", "Commitment Value"]
        },
        {
          name: "Actions",
          icon: IconMap.Zap,
          description: "Execution and value creation",
          stages: [
            {
              name: "Implementation",
              activities: ["Execution Planning", "Resource Deployment", "Progress Tracking"]
            },
            {
              name: "Monitoring",
              activities: ["Performance Tracking", "Adjustment Management", "Success Measurement"]
            },
            {
              name: "Learning",
              activities: ["Pattern Recognition", "Knowledge Integration", "Value Enhancement"]
            }
          ],
          valueCreation: ["Execution Value", "Implementation Success", "Learning Integration"]
        }
      ]
    },
    bots: {
      title: "Complete BizzyBot Network",
      icon: IconMap.Brain,
      color: "blue",
      components: [
        {
          name: "StratBot",
          icon: IconMap.Target,
          description: "Strategic planning and direction",
          capabilities: [
            "Strategic Analysis",
            "Direction Setting",
            "Value Positioning",
            "Growth Planning"
          ],
          frameworks: ["OCDA", "4D", "Coevolution"],
          valueStreams: ["Strategic Direction", "Resource Optimization"]
        },
        {
          name: "GroundLink",
          icon: IconMap.Globe,
          description: "Operations and resource management",
          capabilities: [
            "Resource Allocation",
            "Process Optimization",
            "Implementation Management",
            "Execution Tracking"
          ],
          frameworks: ["4D", "Business Architecture"],
          valueStreams: ["Operational Efficiency", "Resource Optimization"]
        },
        {
          name: "DataBits",
          icon: IconMap.Database,
          description: "Intelligence and analytics engine",
          capabilities: [
            "Pattern Recognition",
            "Data Analysis",
            "Insight Generation",
            "Learning Integration"
          ],
          frameworks: ["Coevolution", "Gestalt"],
          valueStreams: ["Intelligence Creation", "Pattern Recognition"]
        },
        {
          name: "Securitron",
          icon: IconMap.Shield,
          description: "Security and compliance",
          capabilities: [
            "Risk Assessment",
            "Compliance Monitoring",
            "Security Management",
            "Threat Detection"
          ],
          frameworks: ["Business Architecture", "4D"],
          valueStreams: ["Risk Management", "Compliance Assurance"]
        },
        {
          name: "Life Optimizer",
          icon: IconMap.Heart,
          description: "Human factors and culture",
          capabilities: [
            "Culture Development",
            "Well-being Management",
            "Growth Support",
            "Team Dynamics"
          ],
          frameworks: ["Coevolution", "Gestalt"],
          valueStreams: ["Cultural Enhancement", "Human Development"]
        },
        {
          name: "SweetBot",
          icon: IconMap.Sparkles,
          description: "Stakeholder success and relationships",
          capabilities: [
            "Relationship Management",
            "Success Tracking",
            "Value Delivery",
            "Stakeholder Engagement"
          ],
          frameworks: ["OCDA", "4D"],
          valueStreams: ["Stakeholder Value", "Relationship Building"]
        },
        {
          name: "PromptMaster",
          icon: IconMap.Layout,
          description: "Workflow and execution orchestration",
          capabilities: [
            "Process Design",
            "Task Management",
            "Flow Optimization",
            "Execution Planning"
          ],
          frameworks: ["4D", "Business Architecture"],
          valueStreams: ["Process Optimization", "Workflow Enhancement"]
        },
        {
          name: "BizBot",
          icon: IconMap.Building2,
          description: "Business architecture management",
          capabilities: [
            "Component Management",
            "Architecture Design",
            "Integration Planning",
            "Structure Optimization"
          ],
          frameworks: ["Business Architecture", "Coevolution"],
          valueStreams: ["Architecture Enhancement", "System Integration"]
        },
        {
          name: "TechBot",
          icon: IconMap.Code,
          description: "Technical systems and infrastructure",
          capabilities: [
            "System Integration",
            "Technical Design",
            "Infrastructure Management",
            "Platform Development"
          ],
          frameworks: ["4D", "Business Architecture"],
          valueStreams: ["Technical Excellence", "System Optimization"]
        }
      ]
    },
    frameworks: {
      title: "Core Framework Integration",
      icon: IconMap.GitBranch,
      color: "purple",
      components: [
        {
          name: "Coevolution Framework",
          icon: IconMap.Clock,
          description: "System evolution and growth",
          stages: [
            {
              name: "Explore",
              activities: ["Possibility Mapping", "Option Generation", "Potential Identification"]
            },
            {
              name: "Attune",
              activities: ["Alignment Creation", "Harmony Building", "Resonance Finding"]
            },
            {
              name: "Integrate",
              activities: ["System Combining", "Component Merging", "Value Synthesis"]
            },
            {
              name: "Recalibrate",
              activities: ["Performance Assessment", "Direction Adjustment", "System Optimization"]
            }
          ],
          valueCreation: ["Evolution Management", "Growth Orchestration", "System Enhancement"]
        },
        {
          name: "4D Framework",
          icon: IconMap.Layout,
          description: "Value delivery and implementation",
          stages: [
            {
              name: "Discover",
              activities: ["Need Analysis", "Opportunity Identification", "Context Mapping"]
            },
            {
              name: "Design",
              activities: ["Solution Architecture", "Process Mapping", "Experience Creation"]
            },
            {
              name: "Develop",
              activities: ["Implementation Planning", "Resource Allocation", "Capability Building"]
            },
            {
              name: "Deliver",
              activities: ["Execution Management", "Value Realization", "Success Measurement"]
            }
          ],
          valueCreation: ["Implementation Success", "Value Delivery", "Resource Optimization"]
        },
        {
          name: "Gestalt Framework",
          icon: IconMap.Globe,
          description: "Temporal context and pattern recognition",
          stages: [
            {
              name: "Past Reflection",
              activities: ["Pattern Recognition", "Learning Extraction", "Context Understanding"]
            },
            {
              name: "Present Clarity",
              activities: ["Current State Analysis", "Resource Assessment", "Capability Evaluation"]
            },
            {
              name: "Future Simulation",
              activities: ["Scenario Planning", "Outcome Projection", "Direction Setting"]
            }
          ],
          valueCreation: ["Pattern Recognition", "Context Enhancement", "Future Preparation"]
        },
        {
          name: "OCDA Framework",
          icon: IconMap.Target,
          description: "Decision orchestration and execution",
          stages: [
            {
              name: "Options",
              activities: ["Possibility Generation", "Alternative Creation", "Path Identification"]
            },
            {
              name: "Choices",
              activities: ["Analysis", "Evaluation", "Selection"]
            },
            {
              name: "Decisions",
              activities: ["Commitment", "Resource Allocation", "Direction Setting"]
            },
            {
              name: "Actions",
              activities: ["Implementation", "Execution", "Value Creation"]
            }
          ],
          valueCreation: ["Decision Excellence", "Execution Quality", "Value Optimization"]
        },
        {
          name: "Business Architecture",
          icon: IconMap.Building2,
          description: "Complete organizational structure",
          stages: [
            {
              name: "Strategic Elements",
              activities: ["Outcomes", "Goals", "Problems", "Solutions"]
            },
            {
              name: "Execution Elements",
              activities: ["Campaigns", "Projects", "Tasks"]
            },
            {
              name: "Resource Elements",
              activities: ["People", "Teams", "Assets"]
            },
            {
              name: "Process Elements",
              activities: ["Workflows", "Milestones", "Deliverables"]
            }
          ],
          valueCreation: ["Structure Optimization", "Process Excellence", "Resource Management"]
        }
      ]
    },
    valueSystem: {
      title: "Value Creation System",
      icon: IconMap.TrendingUp,
      color: "green",
      components: [
        {
          name: "Direct Value",
          icon: IconMap.Target,
          description: "Immediate value generation",
          stages: [{
            name: "Value Mechanisms",
            activities: [
              "Revenue Growth",
              "Cost Reduction",
              "Efficiency Gains",
              "Quality Enhancement"
            ]
          }]
        },
        {
          name: "Network Value",
          icon: IconMap.Network,
          description: "Ecosystem value creation",
          stages: [{
            name: "Value Mechanisms",
            activities: [
              "Cross-learning",
              "Pattern Sharing",
              "Collective Intelligence",
              "Synergy Creation"
            ]
          }]
        },
        {
          name: "Future Value",
          icon: IconMap.TrendingUp,
          description: "Long-term value potential",
          stages: [{
            name: "Value Mechanisms",
            activities: [
              "Innovation Pipeline",
              "Capability Development",
              "Growth Potential",
              "Evolution Capacity"
            ]
          }]
        }
      ]
    }
  };

  const renderComponent = (component) => (
    <Card className="mb-4 bg-white hover:shadow-lg transition-all cursor-pointer"
          onClick={() => setSelectedDetail(component)}>
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          {component.icon && React.createElement(component.icon, {
            className: "w-5 h-5 text-blue-500 mr-2"
          })}
          <h3 className="text-lg font-bold">{component.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{component.description}</p>
        
        {component.capabilities && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Capabilities</h4>
            <div className="grid grid-cols-2 gap-2">
              {component.capabilities.map((capability, idx) => (
                <div key={idx} className="flex items-center p-2 bg-blue-50 rounded-lg text-sm">
                  <Zap className="w-4 h-4 text-blue-500 mr-2" />
                  {capability}
                </div>
              ))}
            </div>
          </div>
        )}

        {component.stages && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Stages</h4>
            <div className="space-y-2">
              {component.stages.map((stage, idx) => (
                <div key={idx} className="p-2 bg-purple-50 rounded-lg">
                  <div className="font-medium mb-1">{stage.name}</div>
                  <div className="grid grid-cols-1 gap-1">
                    {stage.activities.map((activity, aidx) => (
                      <div key={aidx} className="text-sm flex items-center">
                        <ArrowRight className="w-3 h-3 text-purple-500 mr-1" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {component.valueCreation && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Value Creation</h4>
            <div className="flex flex-wrap gap-2">
              {component.valueCreation.map((value, idx) => (
                <div key={idx} className="px-3 py-1 bg-green-50 rounded-full text-sm">
                  {value}
                </div>
              ))}
            </div>
          </div>
        )}

        {component.frameworks && (
          <div>
            <h4 className="font-semibold mb-2">Framework Integration</h4>
            <div className="flex flex-wrap gap-2">
              {component.frameworks.map((framework, idx) => (
                <div key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {framework}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Complete SweetBOS Ecosystem</h1>
        <p className="text-gray-600">
          Comprehensive view of all bots, frameworks, and value creation systems
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {Object.entries(completeSystem).map(([key, section]) => (
          <div key={key} className="border rounded-lg bg-white">
            <button
              onClick={() => {
                const newExpanded = new Set(expandedSections);
                if (newExpanded.has(key)) {
                  newExpanded.delete(key);
                } else {
                  newExpanded.add(key);
                }
                setExpandedSections(newExpanded);
              }}
              className="w-full flex items-center p-4 text-left"
            >
              {React.createElement(section.icon, {
                className: `w-6 h-6 text-${section.color}-600 mr-3`
              })}
              <span className="font-bold text-xl">{section.title}</span>
              {expandedSections.has(key) ? (
                <ChevronDown className="ml-auto" />
              ) : (
                <ChevronRight className="ml-auto" />
              )}
            </button>
            
            {expandedSections.has(key) && (
              <div className="p-4 border-t">
                {section.components.map((component, idx) => (
                  <div key={idx}>
                    {renderComponent(component)}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompleteSweetBOSExplorer;