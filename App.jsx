import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Briefcase, 
  Palette, 
  Menu, 
  X,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
      {/* Background Pattern Effect (Subtle Doodles) */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-yellow-400 font-handwriting italic tracking-wider cursor-pointer">
            Jauhari Sagalih.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-300">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About Me</a>
            <a href="#experience" className="hover:text-yellow-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-yellow-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 absolute top-full left-0 w-full p-6 border-t border-neutral-800">
            <div className="flex flex-col space-y-4 text-center">
              <a href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-yellow-400 py-2">About Me</a>
              <a href="#experience" onClick={toggleMenu} className="text-gray-300 hover:text-yellow-400 py-2">Experience</a>
              <a href="#skills" onClick={toggleMenu} className="text-gray-300 hover:text-yellow-400 py-2">Skills</a>
              <a href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-yellow-400 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-0 z-10 min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 h-full flex items-center relative z-20">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up max-w-2xl">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                CREATIVE <br />
                <span className="text-yellow-400">DESIGNER</span>
              </h1>
              <div className="h-1 w-24 bg-yellow-400 mt-4 rounded-full"></div>
            </div>

            {/* About Me Text */}
            <div className="bg-neutral-900/50 p-6 rounded-l-xl border-l-4 border-yellow-400 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">About Me</h3>
              <p className="text-gray400 leading-relaxed max-w-lg">
                Passionate Graphic Designer focused on overseeing all phases of projects. 
                Successful at creating brand messages, strategies, and key graphic productions. 
                Resourceful and hardworking with know-how to produce top-notch content using Adobe Creative Suite.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-transparent border-2 border-gray-600 rounded-full text-white font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all flex items-center gap-2 group">
                Download Portfolio
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition-all shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                Hire Me Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Image Placeholder - CORNER ALIGNMENT */}
        <div className="absolute bottom-0 right-0 z-10 w-full md:w-[55vw] h-full pointer-events-none flex justify-end items-end">
             {/* Abstract Shapes behind image */}
             <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl opacity-50"></div>
             <div className="absolute top-40 right-40 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>
             
             {/* The "Man in Cap" Placeholder Image - Aligned to right corner */}
             <div className="relative w-full h-full flex justify-end items-end">
                <img 
                  src="https://drive.google.com/thumbnail?id=1DAEbtXmAe6JaBPt83HnYEHcKyRZ_oho8&sz=w1000" 
                  alt="Creative Designer" 
                  className="object-cover h-[150vh] md:h-[130vh] w-auto grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-2xl"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"; // Fallback jika GDrive gagal
                    console.error("Gagal memuat gambar dari Google Drive");
                  }}
                />
             </div>
        </div>
      </header>

      {/* EXPERIENCE SECTION (Requested Addition) */}
      <section id="experience" className="py-20 bg-neutral-900 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            
            {/* Header */}
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
              <div className="h-1 w-16 bg-yellow-400 mb-6"></div>
              <p className="text-gray-400">
                A timeline of my professional journey, working with diverse clients and agencies to deliver impactful creative solutions.
              </p>
              <div className="mt-8 hidden md:block">
                <Briefcase size={120} className="text-neutral-800" />
              </div>
            </div>

            {/* Timeline */}
            <div className="md:w-2/3 space-y-8 relative border-l border-neutral-800 ml-4 md:ml-0 pl-8 md:pl-12">
              
              {/* Job 1 */}
              <div className="relative group">
                <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-yellow-400 group-hover:scale-125 transition-transform"></div>
                <span className="text-yellow-400 text-sm font-bold tracking-widest mb-1 block">2021 - PRESENT</span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Senior Graphic Designer</h3>
                <h4 className="text-gray-300 mb-4 font-medium">Creative Agency Inc. • Jakarta</h4>
                <p className="text-gray-500 leading-relaxed">
                  Lead designer for branding projects involving multinational clients. Mentoring junior designers and overseeing the visual direction of key campaigns.
                </p>
              </div>

              {/* Job 2 */}
              <div className="relative group">
                <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-gray-600 group-hover:bg-yellow-400 transition-colors"></div>
                <span className="text-gray-500 text-sm font-bold tracking-widest mb-1 block">2019 - 2021</span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">UI/UX Designer</h3>
                <h4 className="text-gray-300 mb-4 font-medium">Tech Startup Studio • Bandung</h4>
                <p className="text-gray-500 leading-relaxed">
                  Collaborated with developers to create intuitive user interfaces for mobile applications. Conducted user research and created wireframes.
                </p>
              </div>

              {/* Job 3 */}
              <div className="relative group">
                <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-gray-600 group-hover:bg-yellow-400 transition-colors"></div>
                <span className="text-gray-500 text-sm font-bold tracking-widest mb-1 block">2017 - 2019</span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Junior Visual Artist</h3>
                <h4 className="text-gray-300 mb-4 font-medium">Freelance • Remote</h4>
                <p className="text-gray-500 leading-relaxed">
                  Handled various graphic design projects ranging from social media content, logo design, to print materials for local businesses.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION (Requested Addition) */}
      <section id="skills" className="py-20 relative z-10 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
            <div className="h-1 w-16 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Software Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Palette className="text-yellow-400" /> Software Proficiency
              </h3>
              <div className="space-y-6">
                <SkillBar name="Adobe Photoshop" percent="95%" />
                <SkillBar name="Adobe Illustrator" percent="90%" />
                <SkillBar name="Figma / UI Design" percent="85%" />
                <SkillBar name="After Effects" percent="70%" />
                <SkillBar name="Blender 3D" percent="60%" />
              </div>
            </div>

            {/* Design & Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-yellow-400" /> Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <SkillCard title="Branding Strategy" desc="Creating cohesive visual identities." />
                <SkillCard title="UI/UX Layout" desc="Designing user-centered interfaces." />
                <SkillCard title="Print Design" desc="Packaging, posters & brochures." />
                <SkillCard title="Art Direction" desc="Guiding visual style & tone." />
              </div>
              
              <div className="mt-8 pt-8 border-t border-neutral-800">
                <h4 className="text-gray-400 mb-4 text-sm uppercase tracking-widest">Languages</h4>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-neutral-900 rounded-lg text-white border border-neutral-800">Indonesian (Native)</span>
                  <span className="px-4 py-2 bg-neutral-900 rounded-lg text-white border border-neutral-800">English (Professional)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-12 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Work Together</h2>
          
          <div className="flex justify-center gap-6 mb-10">
            <SocialIcon icon={<Instagram size={20} />} link="#" />
            <SocialIcon icon={<Twitter size={20} />} link="#" />
            <SocialIcon icon={<Linkedin size={20} />} link="#" />
            <SocialIcon icon={<Mail size={20} />} link="mailto:hello@mysite.com" />
          </div>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} YS Creative. All rights reserved. <br />
            Designed based on your concept.
          </p>
        </div>
      </footer>

    </div>
  );
};

/* Helper Components */

const SkillBar = ({ name, percent }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 font-medium">{name}</span>
      <span className="text-yellow-400 font-bold">{percent}</span>
    </div>
    <div className="h-3 w-full bg-neutral-800 rounded-full overflow-hidden">
      <div 
        className="h-full bg-yellow-400 rounded-full transition-all duration-1000 ease-out"
        style={{ width: percent }}
      ></div>
    </div>
  </div>
);

const SkillCard = ({ title, desc }) => (
  <div className="p-4 bg-neutral-900 border border-neutral-800 hover:border-yellow-400/50 rounded-xl transition-all hover:-translate-y-1 group">
    <h4 className="font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{title}</h4>
    <p className="text-xs text-gray-500">{desc}</p>
  </div>
);

const SocialIcon = ({ icon, link }) => (
  <a 
    href={link} 
    className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
  >
    {icon}
  </a>
);

export default Portfolio;
