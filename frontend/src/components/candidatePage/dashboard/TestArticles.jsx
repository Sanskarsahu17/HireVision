import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export default function TechArticles({ articles }) {
  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <div className='flex items-center gap-2 mb-6'>
        <BookOpen className='w-5 h-5 text-purple-400' />
        <h2 className='text-xl font-semibold text-white'>
          Latest Tech Articles
        </h2>
      </div>
      <div className='space-y-4'>
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors'
          >
            <h3 className='text-white font-medium mb-2'>{article.title}</h3>
            <p className='text-slate-400 text-sm mb-3'>{article.excerpt}</p>
            <div className='flex items-center text-purple-400 text-sm'>
              Read more
              <ArrowRight className='w-4 h-4 ml-2' />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
