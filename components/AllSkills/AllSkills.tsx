"use client";

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SkillItem {
  category: string;
  skill: string;
  color: string;
}

const allSkillsData: SkillItem[] = [
  // Linguagens
  { category: "Linguagens", skill: "C#", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Linguagens", skill: "Python", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Linguagens", skill: "JavaScript", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30" },
  { category: "Linguagens", skill: "TypeScript", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Linguagens", skill: "SQL", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Linguagens", skill: "T-SQL", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Linguagens", skill: "PL/pgSQL", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  
  // Frameworks
  { category: "Frameworks", skill: ".NET 6", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Frameworks", skill: ".NET 7", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Frameworks", skill: ".NET 8", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Frameworks", skill: ".NET 9", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Frameworks", skill: "ASP.NET Core", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Frameworks", skill: "Entity Framework Core", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Frameworks", skill: "Express.js", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Frameworks", skill: "Node.js", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Frameworks", skill: "MAUI", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Frameworks", skill: "PySpark", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  
  // Banco de Dados
  { category: "Banco de Dados", skill: "PostgreSQL", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Banco de Dados", skill: "SQL Server", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Banco de Dados", skill: "MySQL", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Banco de Dados", skill: "Redis", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Banco de Dados", skill: "Dapper", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Banco de Dados", skill: "Npgsql", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Banco de Dados", skill: "Parquet", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  
  // Arquitetura
  { category: "Arquitetura", skill: "Clean Architecture", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Domain-Driven Design", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "CQRS", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Event-Driven Architecture", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Microservices", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "API Design", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Repository Pattern", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Unit of Work", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Factory Pattern", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Strategy Pattern", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Decorator Pattern", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Observer Pattern", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Adapter Pattern", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Proxy Pattern", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Middleware Pattern", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "MVVM", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Pipeline Behaviors", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Arquitetura", skill: "Dependency Injection", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  
  // Cloud AWS
  { category: "Cloud AWS", skill: "EKS", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "ECR", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "S3", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "SQS", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "SQS FIFO", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "SES", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "SNS", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "Glue", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "Lambda", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "Athena", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "Secrets Manager", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "Elastic Beanstalk", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "CloudWatch", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "Polly", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "Personalize", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "Lightsail", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "RDS", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Cloud AWS", skill: "IAM", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  
  // Cloud Azure
  { category: "Cloud Azure", skill: "Databricks", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Cloud Azure", skill: "Synapse Analytics", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Cloud Azure", skill: "Azure AD", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Cloud Azure", skill: "Microsoft Graph", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  
  // DevOps
  { category: "DevOps", skill: "Kubernetes", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "DevOps", skill: "Helm", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "DevOps", skill: "ArgoCD", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "DevOps", skill: "Docker", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "DevOps", skill: "GitHub Actions", color: "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30" },
  { category: "DevOps", skill: "Bitbucket Pipelines", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "DevOps", skill: "HashiCorp Vault", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30" },
  { category: "DevOps", skill: "External Secrets Operator", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "DevOps", skill: "OpenTofu", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "DevOps", skill: "Terraform", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "DevOps", skill: "SonarQube", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "DevOps", skill: "GitOps", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  
  // Mensageria
  { category: "Mensageria", skill: "RabbitMQ", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Mensageria", skill: "MassTransit", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Mensageria", skill: "SignalR", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Mensageria", skill: "Webhooks", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  
  // Bibliotecas .NET
  { category: "Bibliotecas .NET", skill: "MediatR", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Bibliotecas .NET", skill: "AutoMapper", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Bibliotecas .NET", skill: "FluentValidation", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Bibliotecas .NET", skill: "Hangfire", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Bibliotecas .NET", skill: "Refit", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Bibliotecas .NET", skill: "Cronos", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30" },
  { category: "Bibliotecas .NET", skill: "xUnit", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Bibliotecas .NET", skill: "Moq", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Bibliotecas .NET", skill: "AutoFixture", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Bibliotecas .NET", skill: "Shouldly", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  
  // Segurança
  { category: "Segurança", skill: "Keycloak", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "OAuth2", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "OIDC", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "JWT Authentication", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "Role-Based Access", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "Rate Limiting", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "Auditoria", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "Criptografia RSA", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "JWKS", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Segurança", skill: "OWASP Dependency Check", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  
  // Observabilidade
  { category: "Observabilidade", skill: "Datadog", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Observabilidade", skill: "Serilog", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Observabilidade", skill: "Elasticsearch", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30" },
  { category: "Observabilidade", skill: "Health Checks", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Observabilidade", skill: "K6", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Observabilidade", skill: "SOLID Principles", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Observabilidade", skill: "Clean Code", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  
  // Data Engineering
  { category: "Data Engineering", skill: "ETL Pipelines", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Data Engineering", skill: "Data Lakehouse", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Data Engineering", skill: "JDBC", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  
  // Inteligência Artificial
  { category: "Inteligência Artificial", skill: "OpenAI API", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Inteligência Artificial", skill: "GPT-4", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Inteligência Artificial", skill: "Whisper", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Inteligência Artificial", skill: "Vision", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Inteligência Artificial", skill: "MCP", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Inteligência Artificial", skill: "Function Calling", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Inteligência Artificial", skill: "Structured Outputs", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  
  // Integrações
  { category: "Integrações", skill: "WhatsApp Business API", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Integrações", skill: "PIX", color: "bg-teal-500/20 text-teal-600 dark:text-teal-400 border-teal-500/30" },
  { category: "Integrações", skill: "EMV", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Integrações", skill: "CRC-16", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Integrações", skill: "Asaas", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Integrações", skill: "RD Station", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Integrações", skill: "DatoCMS", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { category: "Integrações", skill: "Sympla", color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30" },
  { category: "Integrações", skill: "CFM", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  
  // Documentação
  { category: "Documentação", skill: "C4 Model", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Documentação", skill: "ADRs", color: "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" },
  { category: "Documentação", skill: "Postmortems", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Documentação", skill: "RCAs", color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30" },
  { category: "Documentação", skill: "RFCs", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Documentação", skill: "Design Documents", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  { category: "Documentação", skill: "Swagger", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Documentação", skill: "OpenAPI", color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  { category: "Documentação", skill: "UML", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  { category: "Documentação", skill: "ERD", color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30" },
  
  // Metodologias
  { category: "Metodologias", skill: "Metodologias Ágeis", color: "bg-teal-500/20 text-teal-600 dark:text-teal-400 border-teal-500/30" },
  { category: "Metodologias", skill: "Scrum", color: "bg-teal-500/20 text-teal-600 dark:text-teal-400 border-teal-500/30" },
  { category: "Metodologias", skill: "Kanban", color: "bg-teal-500/20 text-teal-600 dark:text-teal-400 border-teal-500/30" },
];

export function AllSkills() {
  const { ref, isVisible } = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSkills = useMemo(() => {
    if (!searchTerm.trim()) return allSkillsData;
    
    const search = searchTerm.toLowerCase();
    return allSkillsData.filter(
      (item) =>
        item.skill.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)
    );
  }, [searchTerm]);

  const groupedSkills = useMemo(() => {
    const groups: Record<string, SkillItem[]> = {};
    filteredSkills.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredSkills]);

  return (
    <section id="todas-habilidades" ref={ref} className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Todas as{" "}
            <span className="gradient-text">Habilidades</span>
          </h2>
          
          <p className="text-center text-muted-foreground mb-8 text-lg">
            São tantas habilidades que precisamos de uma busca!
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar habilidades... (ex: Python, AWS, Docker)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 glass rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <div className="text-center mt-4 text-sm text-muted-foreground">
              <span className="font-bold text-primary-600 dark:text-primary-400">
                {filteredSkills.length}
              </span>{" "}
              habilidade{filteredSkills.length !== 1 ? "s" : ""} encontrada{filteredSkills.length !== 1 ? "s" : ""}
              {searchTerm && (
                <span>
                  {" "}para "<span className="font-semibold">{searchTerm}</span>"
                </span>
              )}
            </div>
          </div>

          {/* Skills Grid by Category */}
          {Object.keys(groupedSkills).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    {category}
                    <span className="text-sm ml-2 text-muted-foreground font-normal">
                      ({skills.length})
                    </span>
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {skills.map((item, index) => (
                      <motion.span
                        key={`${item.category}-${item.skill}-${index}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.02, duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 cursor-default ${item.color}`}
                      >
                        {item.skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 glass rounded-xl"
            >
              <p className="text-xl text-muted-foreground">
                Nenhuma habilidade encontrada para "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Limpar busca
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
