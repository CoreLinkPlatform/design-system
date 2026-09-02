import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { IconButton } from './IconButton';
import { Input } from './Input';
import { Select } from './Select';
import { FormField } from './FormField';
import { Surface } from './Surface';
import { Card } from './Card';
import { StatusBadge } from './StatusBadge';
import { Metric } from './Metric';
import { PageHeader } from './PageHeader';
import { EmptyState } from './EmptyState';

const meta = {
  title: 'Components/Accepted slice',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Icon = () => <span aria-hidden="true">◆</span>;

export const PersianRTL: Story = {
  render: () => (
    <div className="core-root" dir="rtl" lang="fa" style={{ display: 'grid', gap: 24, padding: 24 }}>
      <PageHeader
        eyebrow="Core Signal"
        title="گزارش آمادگی عامل هوشمند"
        description="کامپوننت‌های مشترک با پشتیبانی کامل از رابط راست‌به‌چپ."
        actions={<Button>شروع ارزیابی</Button>}
      />
      <Surface variant="subtle">
        <FormField
          controlId="domain-fa"
          label="دامنهٔ وب‌سایت"
          description="نشانی را بدون مسیر وارد کنید."
          required
        >
          <Input id="domain-fa" dir="ltr" placeholder="example.com" required />
        </FormField>
      </Surface>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button>اصلی</Button>
        <Button variant="secondary">ثانویه</Button>
        <Button variant="ghost">بدون زمینه</Button>
        <Button variant="danger">حذف</Button>
        <Button loading>در حال بررسی</Button>
        <IconButton label="تنظیمات" icon={<Icon />} />
      </div>
      <FormField controlId="profile-fa" label="نوع سایت">
        <Select id="profile-fa" defaultValue="media">
          <option value="media">رسانه</option>
          <option value="commerce">فروشگاه</option>
        </Select>
      </FormField>
      <Card title="کشف‌پذیری" description="وضعیت سیگنال‌های قابل استفاده برای عامل‌ها" footer={<Button variant="secondary">مشاهدهٔ شواهد</Button>}>
        <div style={{ display: 'flex', gap: 8 }}>
          <StatusBadge tone="success" dot>آماده</StatusBadge>
          <StatusBadge tone="warning" dot>نیازمند بهبود</StatusBadge>
        </div>
        <Metric label="امتیاز آمادگی" value="۸۲" trend="+۴٪" supportingText="در مقایسه با ارزیابی پیشین" />
      </Card>
      <EmptyState
        icon={<Icon />}
        title="هنوز گزارشی وجود ندارد"
        description="برای مشاهدهٔ شواهد و پیشنهادهای اصلاحی، نخستین ارزیابی را اجرا کنید."
        action={<Button>شروع ارزیابی</Button>}
      />
    </div>
  ),
};

export const EnglishLTR: Story = {
  render: () => (
    <div className="core-root" dir="ltr" lang="en" style={{ display: 'grid', gap: 24, padding: 24 }}>
      <PageHeader
        eyebrow="Core Signal"
        title="Agent readiness report"
        description="The same component contract in a left-to-right interface."
        actions={<Button>Run audit</Button>}
      />
      <FormField controlId="domain-en" label="Website domain" description="Enter a hostname without a path.">
        <Input id="domain-en" placeholder="example.com" />
      </FormField>
      <Card title="Discoverability" description="Machine-readable signals">
        <StatusBadge tone="info" dot>Running</StatusBadge>
        <Metric label="Readiness score" value="82" supportingText="Ruleset v1" />
      </Card>
    </div>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <div data-theme="dark" style={{ background: '#0c111d', padding: 24 }}>
      <div className="core-root" dir="rtl" lang="fa" style={{ display: 'grid', gap: 16, padding: 24 }}>
        <Card title="وضعیت سرویس" variant="raised">
          <StatusBadge tone="success" dot>متصل</StatusBadge>
          <Metric label="در دسترس بودن" value="۹۹٫۹٪" />
          <Button>مشاهدهٔ جزئیات</Button>
        </Card>
      </div>
    </div>
  ),
};

export const ValidationAndDisabled: Story = {
  render: () => (
    <div className="core-root" dir="rtl" lang="fa" style={{ display: 'grid', gap: 20, maxWidth: 520, padding: 24 }}>
      <FormField controlId="invalid-domain" label="دامنه" error="دامنه معتبر نیست.">
        <Input id="invalid-domain" invalid aria-describedby="invalid-domain-error" defaultValue="not a domain" />
      </FormField>
      <Input disabled value="ورودی غیرفعال" readOnly />
      <Button disabled>عملیات غیرفعال</Button>
    </div>
  ),
};
