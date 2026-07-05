import React from 'react';
import { Blocks, Bot, ShieldCheck, Layers } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';

const web3Tags = ['Solidity', 'Rust / Solana', 'DeFi', 'NFTs', 'Wallets', 'Audits', 'The Graph'];
const aiTags = ['LLM Agents', 'RAG', 'Vector Search', 'Tool-calling', 'Evals', 'Guardrails', 'MLOps'];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <SectionTitle
          kicker="Where we go deep"
          title={
            <>
              Serious depth in <span className="ink-grad">Web3</span> &amp; <span className="text-signal">Agentic AI</span>
            </>
          }
          description="Two of the hardest, fastest-moving areas in software — and where a lot of our recent work lives."
        />

        <div className="bento" style={{ marginTop: '3rem' }}>
          <Reveal className="bento-cell feature card" as="div">
            <span className="bento-eyebrow" style={{ color: 'var(--ignite-3)' }}>
              <Blocks size={16} /> Blockchain / Web3
            </span>
            <h3>On-chain products that pass the audit</h3>
            <p>
              We ship production smart contracts and dApps across EVM chains and Solana — DeFi,
              staking, tokenomics and wallets — built gas-efficient and security-first, not as
              proofs of concept.
            </p>
            <div className="tag-row">
              {web3Tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="bento-cell feature card" as="div" delay={0.08}>
            <span className="bento-eyebrow">
              <Bot size={16} /> Agentic AI / LLM
            </span>
            <h3>AI agents wired into your real workflows</h3>
            <p>
              Autonomous agents, copilots and RAG systems that connect real LLMs to your data and
              tools — with the evals, guardrails and observability needed to run them in production.
            </p>
            <div className="tag-row">
              {aiTags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="bento-cell span-2 card" as="div" delay={0.05}>
            <span className="bento-metric">
              $40M<span className="u">+</span>
            </span>
            <p style={{ marginTop: '0.6rem' }}>Total value locked across on-chain protocols we've engineered.</p>
          </Reveal>

          <Reveal className="bento-cell span-2 card" as="div" delay={0.1}>
            <span className="bento-metric" style={{ color: 'var(--signal)' }}>
              64<span className="u" style={{ color: 'var(--signal)' }}>%</span>
            </span>
            <p style={{ marginTop: '0.6rem' }}>Support volume auto-resolved by an AI agent we shipped for a SaaS client.</p>
          </Reveal>

          <Reveal className="bento-cell span-2 card" as="div" delay={0.15}>
            <span className="bento-eyebrow" style={{ color: 'var(--text-mute)' }}>
              <Layers size={16} /> Full stack
            </span>
            <h3 style={{ fontSize: '1.15rem' }}>One team, whole product</h3>
            <p>
              Strategy, design, engineering and security under one roof —
              <ShieldCheck size={14} style={{ display: 'inline', margin: '0 4px -2px', color: 'var(--ignite-3)' }} />
              audit-ready from day one.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
