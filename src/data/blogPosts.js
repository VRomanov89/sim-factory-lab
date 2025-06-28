export const blogPosts = [
  {
    slug: 'starting-machine-monitoring',
    title: 'How We\'re Starting with a Single Machine',
    date: '2025-01-26',
    author: 'Vladimir Romanov',
    authorProfile: {
      name: 'Vladimir Romanov',
      role: 'Manufacturing & Industrial Automation Leader',
      image: process.env.PUBLIC_URL + '/profile_photos/vladimir-romanov.webp',
      bio: 'Managing Partner at Joltek, a company dedicated to helping manufacturing leaders modernize OT systems for greater reliability, data visibility, and ROI. Joltek specializes in consulting, training, upskilling, and systems integration for manufacturing organizations, delivering tailored solutions for digital transformation and operational excellence.',
      social: {
        linkedin: 'https://www.linkedin.com/in/vladromanov/',
        github: 'https://github.com/VRomanov89',
        twitter: 'https://x.com/VRomanov89',
        web: 'https://www.joltek.com/'
      }
    },
    tags: ['Machine Monitoring', 'Getting Started'],
    excerpt: 'Our journey begins with monitoring a single machine to understand the fundamentals of industrial automation.',
    content: `# Our First Project

We're starting Sim Factory Lab by focusing on a single machine. This approach allows us to:

- Understand the basics of machine monitoring
- Learn about different protocols (Modbus, OPC UA)
- Build a solid foundation for scaling up

## Why Start Small?

Industrial automation can be overwhelming. By starting with one machine, we can:

1. **Learn the fundamentals** - Understanding how machines communicate
2. **Test our assumptions** - Validating our approach before scaling
3. **Build confidence** - Proving our concept works in practice

## Next Steps

Once we have the first machine working, we'll expand to:
- Multiple machines
- Data visualization
- Predictive maintenance

Stay tuned for updates on our progress!`
  },
  {
    slug: 'choosing-our-tech-stack',
    title: 'Choosing Our Technology Stack',
    date: '2025-01-25',
    author: 'Vladimir Romanov',
    authorProfile: {
      name: 'Vladimir Romanov',
      role: 'Manufacturing & Industrial Automation Leader',
      image: process.env.PUBLIC_URL + '/profile_photos/vladimir-romanov.webp',
      bio: 'Managing Partner at Joltek, a company dedicated to helping manufacturing leaders modernize OT systems for greater reliability, data visibility, and ROI. Joltek specializes in consulting, training, upskilling, and systems integration for manufacturing organizations, delivering tailored solutions for digital transformation and operational excellence.',
      social: {
        linkedin: 'https://www.linkedin.com/in/vladromanov/',
        github: 'https://github.com/VRomanov89',
        twitter: 'https://x.com/VRomanov89',
        web: 'https://www.joltek.com/'
      }
    },
    tags: ['Tech Stack', 'Industrial Automation'],
    excerpt: 'A deep dive into the technologies we\'re selecting for our industrial automation platform.',
    content: `# Technology Stack Selection

After extensive research, we've chosen our technology stack for Sim Factory Lab.

## Long-term Vision

Our complete stack will include:

### Hardware Layer
- **PLCs** - Programmable Logic Controllers for machine control
- **HMIs** - Human Machine Interfaces for operator interaction
- **Sensors** - Various sensors for data collection

### Software Layer
- **SCADA** - Supervisory Control and Data Acquisition
- **MES** - Manufacturing Execution System
- **Historian** - Data storage and analysis

## MVP Approach

For our minimum viable product, we're starting with:
- Simple machine monitoring
- Basic data collection
- Web-based dashboard

This allows us to validate our approach before investing in complex systems.

## Why This Matters

The right technology stack is crucial for:
- Scalability
- Reliability
- Cost-effectiveness
- Future growth

We'll share more details about each component as we implement them.`
  },
  {
    slug: 'meet-the-team',
    title: 'Meet the Sim Factory Lab Team',
    date: '2025-01-24',
    author: 'Vladimir Romanov',
    authorProfile: {
      name: 'Vladimir Romanov',
      role: 'Manufacturing & Industrial Automation Leader',
      image: process.env.PUBLIC_URL + '/profile_photos/vladimir-romanov.webp',
      bio: 'Managing Partner at Joltek, a company dedicated to helping manufacturing leaders modernize OT systems for greater reliability, data visibility, and ROI. Joltek specializes in consulting, training, upskilling, and systems integration for manufacturing organizations, delivering tailored solutions for digital transformation and operational excellence.',
      social: {
        linkedin: 'https://www.linkedin.com/in/vladromanov/',
        github: 'https://github.com/VRomanov89',
        twitter: 'https://x.com/VRomanov89',
        web: 'https://www.joltek.com/'
      }
    },
    tags: ['Team', 'About Us'],
    excerpt: 'Introducing the founding team behind Sim Factory Lab and our vision for industrial automation.',
    content: `# Meet the Team

Sim Factory Lab was founded by three passionate engineers with a shared vision for the future of industrial automation.

## Vladimir Romanov

**Role**: Technical Lead & PLC Specialist

Vladimir brings deep expertise in industrial automation and PLC programming. With years of experience in manufacturing environments, he understands the challenges and opportunities in modern industrial systems.

## Kudzai Manditereza

**Role**: Software Architect & SCADA Expert

Kudzai specializes in SCADA systems and software architecture. His background in both traditional and modern software development provides the perfect bridge between industrial and web technologies.

## Justin Dean

**Role**: Data Scientist & MES Specialist

Justin focuses on data analysis and Manufacturing Execution Systems. His expertise in turning raw industrial data into actionable insights is crucial for our predictive maintenance goals.

## Our Vision

Together, we're building a platform that makes industrial automation accessible, affordable, and powerful. We believe that every manufacturer, regardless of size, should have access to the tools they need to optimize their operations.

## What's Next

We're currently working on our first prototype and will be sharing regular updates on our progress. Follow along as we build the future of manufacturing!`
  }
]; 