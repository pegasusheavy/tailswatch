import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

interface CodeExample {
  id: string;
  language: string;
  title: string;
  code: string;
  expanded: boolean;
}

@Component({
  selector: 'app-code-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, FontAwesomeModule],
  templateUrl: './code-section.component.html',
  styleUrl: './code-section.component.scss'
})
export class CodeSectionComponent {
  readonly expandedBlocks = signal<Set<string>>(new Set(['javascript']));

  readonly codeExamples: CodeExample[] = [
    {
      id: 'javascript',
      language: 'JavaScript',
      title: 'Async Data Fetching',
      expanded: true,
      code: `// Fetch user data with error handling
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const userData = await response.json();
    console.log('User loaded:', userData.name);
    return userData;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}`
    },
    {
      id: 'typescript',
      language: 'TypeScript',
      title: 'Generic Repository Pattern',
      expanded: false,
      code: `interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

class Repository<T extends Entity> {
  private items: Map<string, T> = new Map();

  async findById(id: string): Promise<T | undefined> {
    return this.items.get(id);
  }

  async save(entity: T): Promise<T> {
    entity.updatedAt = new Date();
    this.items.set(entity.id, entity);
    return entity;
  }

  async delete(id: string): Promise<boolean> {
    return this.items.delete(id);
  }
}`
    },
    {
      id: 'python',
      language: 'Python',
      title: 'Data Processing Pipeline',
      expanded: false,
      code: `from dataclasses import dataclass
from typing import List, Optional
import asyncio

@dataclass
class DataPoint:
    timestamp: float
    value: float
    label: Optional[str] = None

class DataPipeline:
    def __init__(self, batch_size: int = 100):
        self.batch_size = batch_size
        self._buffer: List[DataPoint] = []

    async def process(self, data: List[DataPoint]) -> dict:
        """Process data points and return statistics."""
        if not data:
            return {"error": "No data provided"}

        values = [d.value for d in data]
        return {
            "count": len(values),
            "mean": sum(values) / len(values),
            "min": min(values),
            "max": max(values)
        }`
    },
    {
      id: 'rust',
      language: 'Rust',
      title: 'Thread-Safe Counter',
      expanded: false,
      code: `use std::sync::{Arc, Mutex};
use std::thread;

struct Counter {
    value: Mutex<i32>,
}

impl Counter {
    fn new() -> Self {
        Counter {
            value: Mutex::new(0),
        }
    }

    fn increment(&self) -> i32 {
        let mut num = self.value.lock().unwrap();
        *num += 1;
        *num
    }
}

fn main() {
    let counter = Arc::new(Counter::new());
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            counter.increment()
        });
        handles.push(handle);
    }
}`
    },
    {
      id: 'go',
      language: 'Go',
      title: 'HTTP Server with Middleware',
      expanded: false,
      code: `package main

import (
    "log"
    "net/http"
    "time"
)

func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
    })
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write([]byte(\`{"status": "healthy"}\`))
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/health", healthHandler)

    handler := loggingMiddleware(mux)
    log.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", handler))
}`
    },
    {
      id: 'c',
      language: 'C',
      title: 'Linked List Implementation',
      expanded: false,
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* create_node(int data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    if (new_node == NULL) {
        fprintf(stderr, "Memory allocation failed\\n");
        exit(1);
    }
    new_node->data = data;
    new_node->next = NULL;
    return new_node;
}

void insert_front(Node** head, int data) {
    Node* new_node = create_node(data);
    new_node->next = *head;
    *head = new_node;
}

void print_list(Node* head) {
    Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}`
    },
    {
      id: 'css',
      language: 'CSS',
      title: 'Animated Card Component',
      expanded: false,
      code: `.card {
  --card-bg: var(--color-surface);
  --card-border: var(--color-border);
  --card-shadow: var(--shadow-md);

  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.card__content {
  color: var(--color-text-muted);
  line-height: 1.6;
}`
    },
    {
      id: 'sql',
      language: 'SQL',
      title: 'Analytics Query',
      expanded: false,
      code: `-- Get monthly active users with revenue
SELECT
    DATE_TRUNC('month', u.created_at) AS month,
    COUNT(DISTINCT u.id) AS active_users,
    SUM(t.amount) AS total_revenue,
    AVG(t.amount) AS avg_transaction
FROM users u
LEFT JOIN transactions t ON u.id = t.user_id
WHERE u.status = 'active'
    AND u.created_at >= NOW() - INTERVAL '12 months'
GROUP BY DATE_TRUNC('month', u.created_at)
HAVING COUNT(DISTINCT u.id) > 100
ORDER BY month DESC
LIMIT 12;`
    }
  ];

  toggleBlock(id: string): void {
    const expanded = new Set(this.expandedBlocks());
    if (expanded.has(id)) {
      expanded.delete(id);
    } else {
      expanded.add(id);
    }
    this.expandedBlocks.set(expanded);
  }

  isExpanded(id: string): boolean {
    return this.expandedBlocks().has(id);
  }

  expandAll(): void {
    this.expandedBlocks.set(new Set(this.codeExamples.map(e => e.id)));
  }

  collapseAll(): void {
    this.expandedBlocks.set(new Set());
  }
}

