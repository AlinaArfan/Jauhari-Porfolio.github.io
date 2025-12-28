<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Jauhari Sagalih</title>
    
    <!-- React & ReactDOM (Development Version) -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <!-- Babel for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts for Handwriting Signature -->
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">

    <style>
        /* Define custom font family and ensure Inter is default */
        body { 
            font-family: 'Inter', sans-serif; 
            /* Set background color here to ensure no flash of white */
            background-color: #0a0a0a;
        }
        .font-handwriting { font-family: 'Caveat', cursive; }
        
        /* Custom Animation Utilities */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        /* Custom style for the logo image */
        .header-logo-img {
            height: 32px; /* Set a specific height */
            width: auto;
        }
    </style>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        neutral: {
                            950: '#0a0a0a',
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="text-white">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        // --- ICON COMPONENTS (Inline SVG replacements for Lucide) ---
        const Icon = ({ children, size = 24, className = "" }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                {children}
            </svg>
        );

        const Download = (props) => <Icon {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-3-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></Icon>;
        const Instagram = (props) => <Icon {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></Icon>;
        const Twitter = (props) => <Icon {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-2.6-2.1-3-5.7-1.7-8.8-4.5 3.6-10.2 3.6-10.2 3.6 1-3.6 4.9-6.3 8.9-6.3-1 0-1.7-1.2-1.7-2.3 0-1 .5-1.5 1-2"/></Icon>;
        const Linkedin = (props) => <Icon {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></Icon>;
        const Mail = (props) => <Icon {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></Icon>;
        const Briefcase = (props) => <Icon {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Icon>;
        const Palette = (props) => <Icon {...props}><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></Icon>;
        const MenuIcon = (props) => <Icon {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></Icon>;
        const XIcon = (props) => <Icon {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Icon>;
        const Phone = (props) => <Icon {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;

        // --- MAIN APP COMPONENT ---
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

          // URL logo placeholder (digunakan di `<div className="text-3xl font-bold...")`)
          const logoSrc = "https://placehold.co/100x32/FFCC00/000000?text=LOGO"; 
          // Link WhatsApp
          const whatsappLink = "https://wa.me/6289662361727"; // Nomor: +62 896 6236 1727

          return (
            <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
              
              {/* Background Pattern Effect */}
              <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                   }}>
              </div>

              {/* Navigation */}
              <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                  
                  {/* DIPERBAIKI: Pindahkan menu desktop ke kiri, ganti posisi logo */}
                  {/* Desktop Menu (Sekarang di Kiri) */}
                  <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-300">
                    <a href="#about" className="hover:text-yellow-400 transition-colors">About Me</a>
                    <a href="#experience" className="hover:text-yellow-400 transition-colors">Experience</a>
                    <a href="#skills" className="hover:text-yellow-400 transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
                  </div>
                  
                  {/* Tombol Menu Mobile (Tetap di Kanan) */}
                  <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
                  </button>
                  
                  {/* Tambahkan elemen spacer kosong jika menu desktop ditampilkan dan menu mobile disembunyikan
                      untuk menjaga elemen menu mobile di kanan tetap di kanan (kecuali pada mobile). */}
                  <div className="hidden md:block">
                    {/* Placeholder kosong untuk menyeimbangkan layout di desktop */}
                  </div>
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
              <header id="about" className="relative pt-24 pb-10 md:pt-36 md:pb-0 z-10 min-h-screen flex items-center overflow-hidden">
                <div className="container mx-auto px-6 h-full flex items-center relative z-20">
                  
                  {/* Left Content - Shifted Up for better positioning */}
                  <div className="space-y-6 md:space-y-8 animate-fade-in-up max-w-2xl md:-mt-32">
                    <div className="space-y-2">
                      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                        JAUHARI <br />
                        <span className="text-yellow-400">SAGALIH</span>
                      </h1>
                      <div className="h-1 w-24 bg-yellow-400 mt-4 rounded-full"></div>
                      <p className="text-xl text-gray-300 font-light tracking-wide pt-4">EXPERIENCED CREATIVE & GRAPHIC DESIGNER</p>
                    </div>

                    {/* About Me Text */}
                    <div className="bg-neutral-900/50 p-6 rounded-l-xl border-l-4 border-yellow-400 backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-3 text-white">About Me</h3>
                      <p className="text-gray-400 leading-relaxed max-w-lg">
                        Passionate Graphic Designer focused on overseeing all phases of projects. 
                        Successful at creating brand messages, strategies, and key graphic productions. 
                        Resourceful and hardworking with know-how to produce top-notch content using Adobe Creative Suite.
                        Currently expanding skills in UI & UX Design.
                      </p>
                    </div>

                    {/* Button Group */}
                    <div className="flex flex-wrap gap-4">
                      {/* Tautan Download Portfolio (sudah ada) */}
                      <a 
                        href="https://drive.google.com/file/d/1bhW8ifC1w4XYgYZFcobK9-TpLFD7kVne/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-transparent border-2 border-gray-600 rounded-full text-white font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all flex items-center gap-2 group"
                      >
                        Download Portfolio
                        <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                      </a>
                      
                      {/* DIPERBAIKI: Mengganti button menjadi tag a dengan link WhatsApp */}
                      <a
                        href={whatsappLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300 transition-all shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                      >
                        Hire Me Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Content - Image Placeholder - CORNER ALIGNMENT */}
                <div className="absolute bottom-0 right-0 z-10 w-full md:w-[55vw] h-full pointer-events-none flex justify-end items-end">
                     {/* Abstract Shapes behind image */}
                     <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl opacity-50"></div>
                     <div className="absolute top-40 right-40 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>
                     
                     {/* The "Man in Cap" Placeholder Image */}
                     <div className="relative w-full h-full flex justify-end items-end">
                        <img 
                          src="https://drive.google.com/thumbnail?id=1DAEbtXmAe6JaBPt83HnYEHcKyRZ_oho8&sz=w1000" 
                          alt="Jauhari Sagalih" 
                          className="object-cover h-[100vh] md:h-[110vh] w-auto grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-2xl"
                          style={{ 
                            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                          }}
                          onError={(e) => {
                            // Fallback to a reliable image URL if the GDrive link fails
                            e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"; 
                          }}
                        />
                     </div>
                </div>
              </header>

              {/* EXPERIENCE SECTION - Updated with Real Data */}
              <section id="experience" className="py-20 bg-neutral-900 relative z-10">
                <div className="container mx-auto px-6">
                  <div className="flex flex-col md:flex-row gap-16">
                    
                    {/* Header */}
                    <div className="md:w-1/3">
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
                      <div className="h-1 w-16 bg-yellow-400 mb-6"></div>
                      <p className="text-gray-400 mb-6">
                        Over 15 years of professional journey, working with diverse clients and agencies to deliver impactful creative solutions.
                      </p>
                      
                      {/* Education Block */}
                      <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Briefcase size={18} className="text-yellow-400"/> Education</h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="text-yellow-400 text-xs font-bold block mb-1">2014 - 2016</span>
                                <div className="text-white font-semibold">Universitas Indonesia Maju</div>
                                <div className="text-gray-500 text-sm">Advertising</div>
                            </li>
                            <li>
                                <span className="text-yellow-400 text-xs font-bold block mb-1">2007 - 2010</span>
                                <div className="text-white font-semibold">Binasaran Informatika</div>
                                <div className="text-gray-500 text-sm">Advertising</div>
                            </li>
                        </ul>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="md:w-2/3 space-y-10 relative border-l border-neutral-800 ml-4 md:ml-0 pl-8 md:pl-12">
                      
                      {/* Job 1 */}
                      <div className="relative group">
                        <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-yellow-400 group-hover:scale-125 transition-transform"></div>
                        <span className="text-yellow-400 text-sm font-bold tracking-widest mb-1 block">2024 - 2025</span>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Fashion / Creative Design</h3>
                        <h4 className="text-gray-300 mb-2 font-medium">Identity Group</h4>
                      </div>

                      {/* Job 2 */}
                      <div className="relative group">
                        <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-gray-600 group-hover:bg-yellow-400 transition-colors"></div>
                        <span className="text-gray-500 text-sm font-bold tracking-widest mb-1 block">2019 - 2023</span>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Creative Design</h3>
                        <h4 className="text-gray-300 mb-2 font-medium">Bluefox Indonesia</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">
                          Specialized in digital imaging and catalog creation, combining photography with digital elements.
                        </p>
                      </div>

                      {/* Job 3 */}
                      <div className="relative group">
                        <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-gray-600 group-hover:bg-yellow-400 transition-colors"></div>
                        <span className="text-gray-500 text-sm font-bold tracking-widest mb-1 block">2018 - 2019</span>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Creative Design & Photography</h3>
                        <h4 className="text-gray-300 mb-2 font-medium">XXI CAFE</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">
                          Developed advertising artwork and managed printing procedures for cafe locations.
                        </p>
                      </div>

                      {/* Job 4 */}
                      <div className="relative group">
                        <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-gray-600 group-hover:bg-yellow-400 transition-colors"></div>
                        <span className="text-gray-500 text-sm font-bold tracking-widest mb-1 block">2017 - 2018</span>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Fashion / Creative Design</h3>
                        <h4 className="text-gray-300 mb-2 font-medium">Taurus Gemilang</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">
                          Designed promotional materials like roll banners and signage for airport lounges and branding.
                        </p>
                      </div>

                      {/* Job 5 */}
                      <div className="relative group">
                        <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-gray-600 group-hover:bg-yellow-400 transition-colors"></div>
                        <span className="text-gray-500 text-sm font-bold tracking-widest mb-1 block">2007 - 2010</span>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Creative Design</h3>
                        <h4 className="text-gray-300 mb-2 font-medium">Surya Digital Print</h4>
                        <p className="text-gray-500 leading-relaxed text-sm">
                          Started career in digital printing, learning color conversion (RGB to CMYK) and printing machinery.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

              {/* SKILLS SECTION - Updated with Real Data */}
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
                        <SkillBar name="Adobe InDesign" percent="85%" />
                        <SkillBar name="Adobe Premiere & After Effects" percent="75%" />
                        {/* DIPERBAIKI: Mengubah nama tag yang salah menjadi panggilan komponen SkillBar yang benar */}
                        <SkillBar name="Adobe XD (UI/UX)" percent="80%" />
                      </div>
                    </div>

                    {/* Design & Soft Skills */}
                    <div>
                      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Briefcase className="text-yellow-400" /> Core Competencies
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <SkillCard title="Digital Imaging" desc="Photo manipulation & composite." />
                        <SkillCard title="Branding Identity" desc="Logos, corporate identity." />
                        <SkillCard title="Print Production" desc="Pre-press, CMYK, large format." />
                        <SkillCard title="AI Generation" desc="Midjourney, Leonardo.Ai." />
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-neutral-800">
                        <h4 className="text-gray-400 mb-4 text-sm uppercase tracking-widest">Additional Tools</h4>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-neutral-900 rounded-lg text-white border border-neutral-800 text-sm">CapCut</span>
                          <span className="px-4 py-2 bg-neutral-900 rounded-lg text-white border border-neutral-800 text-sm">Microsoft Office</span>
                          <span className="px-4 py-2 bg-neutral-900 rounded-lg text-white border border-neutral-800 text-sm">Leonardo.Ai</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Footer / Contact - Updated with Real Data */}
              <footer id="contact" className="py-12 bg-neutral-900 border-t border-neutral-800">
                <div className="container mx-auto px-6 text-center">
                  <h2 className="text-3xl font-bold text-white mb-8">Let's Work Together</h2>
                  
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
                    <a href="mailto:jsagalih1719@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                            <Mail size={18} />
                        </div>
                        jsagalih1719@gmail.com
                    </a>
                    <a href="tel:+6289662361727" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                            <Phone size={18} />
                        </div>
                        +62 896 6236 1727
                    </a>
                    <a href="https://www.linkedin.com/in/j-s-b5721173/" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors" rel="noopener noreferrer">
                        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                            <Linkedin size={18} />
                        </div>
                        LinkedIn Profile
                    </a>
                  </div>

                  <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Jauhari Sagalih. All rights reserved. <br />
                    Creative Portfolio.
                  </p>
                </div>
              </footer>

            </div>
          );
        };

        // --- HELPER COMPONENTS ---

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

        // Mount the application
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Portfolio />);
    </script>
</body>
</html>
