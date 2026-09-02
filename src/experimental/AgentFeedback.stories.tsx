import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';
import { AgentStatusOrb } from './AgentStatusOrb';
import { AnimatedNumber } from './AnimatedNumber';
import { AsyncStatus } from './AsyncStatus';
import { MotionProvider } from './MotionProvider';
import { Progress } from './Progress';
import { StatusIndicator, type FeedbackStatus } from './StatusIndicator';
import './styles.css';

const meta = { title: 'Experimental/Agent feedback', parameters: { layout: 'padded' } } satisfies Meta;
export default meta; type Story = StoryObj<typeof meta>;
const states: FeedbackStatus[] = ['idle', 'queued', 'running', 'partial', 'success', 'blocked', 'error'];

export const EnglishLTR: Story = { render: () => <MotionProvider><div className="core-root" dir="ltr" lang="en" style={{ display: 'grid', gap: 20, padding: 24 }}>
  <AsyncStatus status="running" label="Auditing discoverability" detail="6 of 12 checks complete" action={<Button variant="secondary">Cancel</Button>} />
  <Progress id="audit-en" label="Audit progress" value={50} valueLabel="6 of 12" />
  <Progress id="queue-en" label="Waiting for a worker" valueLabel="Queued" />
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>{states.map(status => <StatusIndicator key={status} status={status} label={status} />)}</div>
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><AgentStatusOrb status="running" label="Agent is running" /><AnimatedNumber value={82} format={value => `${Math.round(value)}%`} /></div>
</div></MotionProvider> };

export const PersianRTL: Story = { render: () => <MotionProvider><div className="core-root" dir="rtl" lang="fa" style={{ display: 'grid', gap: 20, padding: 24 }}>
  <AsyncStatus status="partial" label="ارزیابی بخشی تکمیل شد" detail="سه بررسی به دلیل محدودیت شبکه انجام نشد." action={<Button variant="secondary">تلاش دوباره</Button>} />
  <Progress id="audit-fa" label="پیشرفت ارزیابی" value={75} valueLabel="۹ از ۱۲" />
  <StatusIndicator status="blocked" label="نیازمند اقدام" />
</div></MotionProvider> };

export const DarkAndReducedMotion: Story = { render: () => <div data-theme="dark" style={{ background: '#0c111d', padding: 24 }}><MotionProvider preference="reduce"><div className="core-root" dir="rtl" lang="fa" style={{ display: 'grid', gap: 20, padding: 24 }}>
  <AsyncStatus status="running" label="در حال بررسی" detail="حرکت غیرضروری غیرفعال است." />
  <Progress id="reduced-fa" label="پیشرفت نامشخص" valueLabel="در حال اجرا" />
  <AgentStatusOrb status="running" label="عامل در حال اجراست" />
</div></MotionProvider></div> };
