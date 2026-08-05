'use client';

import { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalWindowProps {
  title?: string;
  codeSnippet?: string;
}

const DEFAULT_JAVA_CODE = `@RestController
@RequestMapping("/api/v1/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @PostMapping
    @PreAuthorize("hasRole('INSTRUCTOR')")
    public ResponseEntity<CourseResponse> createCourse(
        @Valid @RequestBody CourseRequest request,
        Authentication auth
    ) {
        CourseResponse response = courseService.create(request, auth.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id}")
    @PreAuthorize("@courseSecurity.isOwner(#id, authentication)")
    public ResponseEntity<CourseResponse> getCourseById(@PathVariable UUID id) {
        return ResponseEntity.ok(courseService.findById(id));
    }
}`;

export function TerminalWindow({
  title = 'CourseController.java — Spring Boot 4',
  codeSnippet = DEFAULT_JAVA_CODE,
}: TerminalWindowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-slate-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 text-xs flex items-center gap-1.5 font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
            {title}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          aria-label="Copy Code Snippet"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 overflow-x-auto bg-slate-950/90 leading-relaxed text-slate-300">
        <pre className="font-mono">
          <code>
            {codeSnippet.split('\n').map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell text-right pr-4 select-none text-slate-600">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.includes('@RestController') || line.includes('@RequestMapping') || line.includes('@PreAuthorize') || line.includes('@PostMapping') || line.includes('@GetMapping') ? (
                    <span className="text-amber-300">{line}</span>
                  ) : line.includes('public class') || line.includes('public ResponseEntity') ? (
                    <span className="text-purple-400">{line}</span>
                  ) : line.includes('return') ? (
                    <span className="text-cyan-400">{line}</span>
                  ) : line.includes('//') ? (
                    <span className="text-slate-500 italic">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Footer status */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Java 21 Virtual Threads Ready
        </span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}
