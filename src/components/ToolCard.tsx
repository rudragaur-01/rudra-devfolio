/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import type { ToolsType } from '@/types';

const ToolCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <div
      className='
        border border-neutral-700 rounded-md 
        flex justify-center items-center text-center 
        py-4 px-6 
        bg-neutral-900/40 
        text-neutral-200 
        font-semibold 
        tracking-wide 
        hover:bg-neutral-800 
        hover:text-white 
        hover:border-neutral-500 
        transition-all duration-200 
        shadow-sm hover:shadow-md
      '
    >
      {tool.label}
    </div>
  );
};

export default ToolCard;
