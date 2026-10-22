import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Copy, Check, Send, BookOpen } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenDeck: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDeck }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: '',
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setFormSubmitted(true);
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Gazal,\n\nMy name is ${formData.name} (${formData.email}).\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n\nLooking forward to hearing from you!`
    );
    window.open(`mailto:${DESIGNER_INFO.contact.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-white border-t border-[#DCE3EC] overflow-hidden">
      {/* Background Subtle Lavender Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A5A6F6]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Creative Philosophy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] text-xs font-mono text-[#101828] border border-[#A5A6F6]/40">
                <span className="w-2 h-2 rounded-full bg-[#A5A6F6]"></span>
                <span>LET'S CONNECT &amp; COLLABORATE</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#101828] tracking-tight leading-[1.08]">
                Design should make the{' '}
                <span className="underline decoration-[#A5A6F6] decoration-4 underline-offset-8">
                  value visible.
                </span>
              </h2>

              <p className="text-[#202938] text-base sm:text-lg leading-relaxed max-w-xl">
                I bring together UI thinking, visual craft, and AI-assisted production to build work that serves both the user and the business. Available for selected roles, UI projects, and brand systems.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] flex items-center justify-between group hover:border-[#A5A6F6] transition-colors shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE3EC] flex items-center justify-center text-[#101828] shadow-sm">
                    <Mail className="w-5 h-5 text-[#A5A6F6]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-500">EMAIL ADDRESS</div>
                    <a
                      href={`mailto:${DESIGNER_INFO.contact.email}`}
                      className="text-[#101828] font-medium text-sm hover:text-[#6062D6] transition-colors"
                    >
                      {DESIGNER_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(DESIGNER_INFO.contact.email, 'email')}
                  className="px-3 py-1.5 rounded-lg bg-white text-xs font-mono text-[#101828] hover:bg-[#EEF0FF] transition-all flex items-center gap-1.5 border border-[#DCE3EC] shadow-sm font-medium"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#A5A6F6]" />}
                  <span>{copiedField === 'email' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] flex items-center justify-between group hover:border-[#A5A6F6] transition-colors shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE3EC] flex items-center justify-center text-[#101828] shadow-sm">
                    <Phone className="w-5 h-5 text-[#A5A6F6]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-500">PHONE &amp; WHATSAPP</div>
                    <a
                      href={`tel:${DESIGNER_INFO.contact.phone}`}
                      className="text-[#101828] font-medium text-sm hover:text-[#6062D6] transition-colors"
                    >
                      {DESIGNER_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(DESIGNER_INFO.contact.phone, 'phone')}
                  className="px-3 py-1.5 rounded-lg bg-white text-xs font-mono text-[#101828] hover:bg-[#EEF0FF] transition-all flex items-center gap-1.5 border border-[#DCE3EC] shadow-sm font-medium"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#A5A6F6]" />}
                  <span>{copiedField === 'phone' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Behance */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] flex items-center justify-between group hover:border-[#A5A6F6] transition-colors shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DCE3EC] flex items-center justify-center text-[#101828] shadow-sm">
                    <ExternalLink className="w-5 h-5 text-[#A5A6F6]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-500">BEHANCE PORTFOLIO</div>
                    <a
                      href={DESIGNER_INFO.contact.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#101828] font-medium text-sm hover:text-[#6062D6] transition-colors"
                    >
                      {DESIGNER_INFO.contact.behanceDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={DESIGNER_INFO.contact.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white text-xs font-mono text-[#101828] hover:bg-[#EEF0FF] transition-all flex items-center gap-1.5 border border-[#DCE3EC] shadow-sm font-medium"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A5A6F6]" />
                </a>
              </div>
            </div>

            {/* Deck Modal CTA */}
            <div className="p-5 rounded-2xl bg-[#EEF0FF] border border-[#A5A6F6]/40 flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-[#101828] text-base">Original 21-Slide Presentation</div>
                <div className="text-xs text-[#202938] font-mono">View the exact portfolio deck in full screen</div>
              </div>
              <button
                onClick={onOpenDeck}
                className="px-4 py-2.5 rounded-xl bg-[#101828] hover:bg-[#202938] text-white text-xs font-medium flex items-center gap-2 shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#A5A6F6]" />
                <span>Launch Deck</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[#F8FAFC] border border-[#DCE3EC] shadow-sm relative">
            <h3 className="text-2xl font-display font-bold text-[#101828] mb-1">
              Send a Message or Project Brief
            </h3>
            <p className="text-xs font-mono text-gray-500 mb-6">
              Inquire about design systems, UI/UX contracts, or full-time opportunities.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-white border border-emerald-300 text-center space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-[#101828] text-lg">Thank You for Reaching Out!</h4>
                <p className="text-xs text-[#202938] leading-relaxed max-w-sm mx-auto">
                  Your inquiry email client has been prepared. You can also reach Gazal directly at{' '}
                  <span className="text-[#101828] font-mono font-bold">{DESIGNER_INFO.contact.email}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#101828] text-xs font-mono text-white hover:bg-[#202938]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#101828] mb-1.5 uppercase font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE3EC] text-[#101828] text-sm focus:outline-none focus:border-[#A5A6F6] transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#101828] mb-1.5 uppercase font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE3EC] text-[#101828] text-sm focus:outline-none focus:border-[#A5A6F6] transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#101828] mb-1.5 uppercase font-medium">
                    Inquiry / Project Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE3EC] text-[#101828] text-sm focus:outline-none focus:border-[#A5A6F6] transition-colors shadow-sm"
                  >
                    <option value="UI/UX Design">UI/UX Interface Design</option>
                    <option value="Brand Identity & Systems">Brand Identity &amp; Visual Direction</option>
                    <option value="E-Commerce Storytelling">E-Commerce UI &amp; Catalog Storytelling</option>
                    <option value="Full-Funnel Campaign Creative">Full-Funnel Campaign Creative</option>
                    <option value="Publication / Educational Design">Publication &amp; Educational Books</option>
                    <option value="Full-Time / Contract Role">Full-Time / Contract Role</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#101828] mb-1.5 uppercase font-medium">
                    Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Gazal about your project, timeline, and requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DCE3EC] text-[#101828] text-sm focus:outline-none focus:border-[#A5A6F6] transition-colors resize-none shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#101828] hover:bg-[#202938] text-white font-medium text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 text-[#A5A6F6] group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
