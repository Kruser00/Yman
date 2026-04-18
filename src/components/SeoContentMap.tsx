import React from 'react';
import { FileImage, Wand2, Layers, Zap, CheckCircle2, ImageIcon, Check, ArrowLeftRight, Sparkles } from 'lucide-react';

interface SeoContentProps {
  title: string;
  description: string;
  keywords: string;
  content: React.ReactNode;
}

interface ConversionKey {
  from: string;
  to: string;
}

const seoContentMap: Record<string, SeoContentProps> = {
  'JPG-to-PNG': {
    title: 'تبدیل JPG به PNG - رایگان و بدون افت کیفیت',
    description: 'بهترین ابزار آنلاین برای تبدیل سریع، رایگان و بدون افت کیفیت تصاویر JPG به PNG. فقط در چند ثانیه و به صورت کامل لوکال در مرورگر شما انجام می‌شود.',
    keywords: 'تبدیل JPG به PNG, مبدل JPG, تغییر فرمت JPG به PNG, تبدیل آنلاین تصویر, تبدیل عکس رایگان',
    content: (
      <div className="space-y-6">
        <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileImage className="text-blue-400" /> چرا JPG را به PNG تبدیل کنیم؟
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            فرمت PNG ایده‌آل برای تصاویر که نیاز به شفافیت دارند، لوگو‌ها، آیکون‌ها و گرافیک‌های 벡تور با کیفیت Lossless است.
            تبدیل JPG به PNG به شما امکان می‌دهد تا کیفیت شفافیت را حفظ کنید و تصویر خود را برای استفاده در وب، شبکه‌های اجتماعی یا طراحی گرافیک آماده کنید.
          </p>
        </div>
        
        <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Wand2 className="text-purple-400" /> راهنمای تبدیل JPG به PNG
          </h3>
          <ol className="text-sm leading-loose text-gray-400 ml-6 list-decimal space-y-3">
            <li>فایل یا فایل‌های JPG خود را در کادر بالا رها کنید (کادر نقطه‌چین).</li>
            <li>در منوی تنظیمات، در بخش تخصصی "فرمت نهایی"، گزینه PNG را انتخاب کنید.</li>
            <li>(اختیاری) می‌توانید از ابزارهای برش، تغییر سایز و یا فیلترهای نوری استفاده نمایید.</li>
            <li>در نهایت دکمه "دانلود همه" را بزنید تا فایل(های) پردازش شده دریافت گردد.</li>
          </ol>
        </div>
        
        <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-green-400" /> مزایای تبدیل JPG به PNG
          </h3>
          <ul className="text-sm leading-loose text-gray-400 space-y-3">
            <li><strong className="text-white">حجم فایل بهینه:</strong> با تبدیل به PNG، می‌توانید حجم فایل را تا 80% کاهش دهید.</li>
            <li><strong className="text-white">کیفیت حفظ شده:</strong> الگوریتم‌های پیشرفته ما اطمینان می‌دهند که کیفیت تصویر در فرمت PNG به حداکثر برسد.</li>
            <li><strong className="text-white">سرعت پردازش:</strong> تمام تبدیل‌ها به صورت لوکال و بدون نیاز به آپلود به سرور انجام می‌شود.</li>
            <li><strong className="text-white">پشتیبانی کامل:</strong> از تمام ویژگی‌های PNG از جمله شفافیت، کانال‌های رنگی و کیفیت Lossless پشتیبانی می‌شود.</li>
          </ul>
        </div>
        
        <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="text-yellow-400" /> نکات مهم برای بهینه‌سازی تبدیل
          </h3>
          <ul className="text-sm leading-loose text-gray-400 space-y-3">
            <li>برای بهینه‌سازی حجم، از تنظیمات کیفیت در بخش عمومی استفاده کنید.</li>
            <li>اگر شفافیت مهم است، از فرمت‌های PNG، WEBP یا AVIF استفاده کنید.</li>
            <li>برای عکس‌های فوتوگرافی، PNG یا WEBP معمولاً بهترین گزینه هستند.</li>
            <li>به یاد داشته باشید که تبدیل مکرر بین فرمت‌های Lossy می‌تواند کیفیت را کاهش دهد.</li>
          </ul>
        </div>
      </div>
    );
  }
};

function getCompressionPercentage(from: string, to: string): number {
  const compressionMap: Record<string, Record<string, number>> = {
    JPG: { PNG: 80, WEBP: 60, AVIF: 70, BMP: 10, GIF: 50 },
    PNG: { JPG: 80, WEBP: 40, AVIF: 60, BMP: 10, GIF: 30 },
    WEBP: { JPG: 50, PNG: 30, AVIF: 40, BMP: 10, GIF: 20 },
    AVIF: { JPG: 70, PNG: 60, WEBP: 40, BMP: 10, GIF: 30 },
    BMP: { JPG: 90, PNG: 90, WEBP: 85, AVIF: 90, GIF: 80 },
    GIF: { JPG: 60, PNG: 70, WEBP: 50, AVIF: 60, BMP: 10 }
  };
  
  return compressionMap[from]?.[to] || 50;
}

export { seoContentMap, getCompressionPercentage };