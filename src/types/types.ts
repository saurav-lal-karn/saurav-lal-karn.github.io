
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Blockchain' | 'AI/ML' | 'Tools' | 'AI';
  icon: string;
}


export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}
