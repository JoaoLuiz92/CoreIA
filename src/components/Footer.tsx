import { Linkedin, Instagram, CircuitBoard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <CircuitBoard className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">Core.IA Technologies</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/joaoluiz92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Core.IA Technologies. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}