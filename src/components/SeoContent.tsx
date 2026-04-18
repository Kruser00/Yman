import React from 'react';
import { Zap, ShieldCheck, FileImage, Settings2, ImageIcon, Sparkles, CheckCircle2, Wand2, Layers, ArrowRight } from 'lucide-react';

// Format-specific information
const formatInfo: Record<string, { name: string; description: string; benefits: string[]; useCases: string[] }> = {
  JPG: {
    name: 'JPG / JPEG',
    description: 'فرمت فشرده‌شده با اتلاف کیفیت، ایده‌آل برای عکس‌های فوتوگرافی و تصاویر با رنگ‌های پیوسته.',
    benefits: ['حجم فایل کم', 'پشتیبانی گسترده', 'مناسب برای وب'],
    useCases: ['عکس‌های فوتوگرافی', 'تصاویر وبسایت', 'شبکه‌های اجتماعی']
  },
  PNG: {
    name: 'PNG',
    description: 'فرمت بدون اتلاف کیفیت با پشتیبانی از شفافیت، مناسب برای لوگو، آیکون و گرافیک.',
    benefits: ['کیفیت بدون اتلاف', 'پشتیبانی شفافیت', 'مناسب برای گرافیک'],
    useCases: ['لوگو و آیکون', 'تصاویر با شفافیت', 'طراحی گرافیک']
  },
  WEBP: {
    name: 'WEBP',
    description: 'فرمت مدرن گوگل با فشرده‌سازی عالی، کیفیت بهتر از JPG با حجم کمتر.',
    benefits: ['فشرده‌سازی برتر', 'پشتیبانی شفافیت', 'حجم کمتر از JPG'],
    useCases: ['وبسایت‌های مدرن', 'اپلیکیشن‌های موبایل', 'بهینه‌سازی سرعت سایت']
  },
  AVIF: {
    name: 'AVIF',
    description: 'فرمت نسل جدید با بالاترین نسبت کیفیت به حجم، پشتیبانی از HDR و شفافیت.',
    benefits: ['بالاترین فشرده‌سازی', 'پشتیبانی HDR', 'آینده‌دار'],
    useCases: ['وبسایت‌های پیشرفته', 'تصاویر با کیفیت بالا', 'اپلیکیشن‌های مدرن']
  },
  BMP: {
    name: 'BMP',
    description: 'فرمت بدون فشرده‌سازی ویندوز، کیفیت اصلی را کاملاً حفظ می‌کند.',
    benefits: ['کیفیت اصلی', 'بدون فشرده‌سازی', 'سادگی'],
    useCases: ['کاربردهای تخصصی', 'ویرایش حرفه‌ای', 'سیستم‌های قدیمی']
  },
  GIF: {
    name: 'GIF',
    description: 'فرمت انیمیشن ساده با ۲۵۶ رنگ، مناسب برای میم‌ها و انیمیشن‌های کوتاه.',
    benefits: ['پشتیبانی انیمیشن', 'پشتیبانی گسترده', 'سادگی'],
    useCases: ['انیمیشن‌های ساده', 'میم و ایموجی', 'بنرهای تبلیغاتی']
  },
  HEIC: {
    name: 'HEIC',
    description: 'فرمت پیش‌فرض آیفون با فشرده‌سازی عالی، نیاز به تبدیل برای استفاده در ویندوز.',
    benefits: ['فشرده‌سازی عالی', 'کیفیت بالا', 'استاندارد اپل'],
    useCases: ['عکس‌های آیفون', 'ذخیره‌سازی موبایل', 'اکوسیستم اپل']
  },
  SVG: {
    name: 'SVG',
    description: 'فرمت برداری مقیاس‌پذیر، مناسب برای آیکون‌ها و تصاویر ساده.',
    benefits: ['مقیاس‌پذیری نامحدود', 'حجم کم', 'قابل ویرایش'],
    useCases: ['آیکون و لوگو', 'نمودارها', 'طراحی وب']
  }
};

// Compression estimates
const getCompressionEstimate = (from: string, to: string): string => {
  const estimates: Record<string, Record<string, string>> = {
    PNG: { JPG: '۶۰-۸۰%', WEBP: '۵۰-۷۰%', AVIF: '۶۰-۸۰%', GIF: '۳۰-۵۰%' },
    BMP: { JPG: '۸۰-۹۵%', WEBP: '۸۵-۹۵%', AVIF: '۹۰-۹۵%', PNG: '۷۰-۹۰%' },
    HEIC: { JPG: '۱۰-۳۰%', PNG: '۳۰-۵۰%', WEBP: '۱۰-۲۰%' },
    JPG: { PNG: 'افزایش ۵۰-۱۰۰%', WEBP: 'کاهش ۲۰-۳۰%', AVIF: 'کاهش ۳۰-۵۰%' },
    WEBP: { AVIF: 'کاهش ۲۰-۳۰%', JPG: 'افزایش ۱۰-۲۰%' },
    GIF: { WEBP: '۵۰-۷۰%', AVIF: '۶۰-۸۰%', PNG: '۳۰-۵۰%' }
  };
  return estimates[from]?.[to] || 'متغیر';
};

export const SeoGeneral = () => (
  <article className="max-w-5xl mx-auto mt-20 mb-32 px-4 rtl text-gray-300">
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
            <Sparkles className="text-cyan-400" size={32} />
            تبدیل فرمت عکس آنلاین و قدرتمند
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
                <p className="leading-loose text-lg">
                    در دنیای دیجیتال امروز، <strong>تبدیل فرمت عکس</strong> و <strong>کاهش حجم تصویر</strong> از اهمیت بالایی برخوردار است. 
                    سامانه پیشرفته ما به شما این امکان را می‌دهد تا به سادگی و کاملاً رایگان، تصاویر خود را به هم تبدیل کنید. 
                    چه بخواهید تبدیل png به jpg انجام دهید، چه فرمت سیستم‌عامل اپل را باز کنید، این ابزار بهترین انتخاب شماست.
                </p>
                <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Settings2 className="text-purple-400" /> ویرایشگر داخلی</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      تنها با کشیدن و رها کردن فایل‌ها (Drag & Drop)، نه‌تنها به مبدل دسترسی دارید، بلکه می‌توانید از ابزارهای 
                      تغییر سایز حرفه‌ای، برش (Crop) و فیلترهای رنگی نیز استفاده نمایید. پردازشگر بومی توانایی اجرای الگوریتم‌های 
                      پیچیده بینایی ماشین را برای تشخیص لبه‌ها و برجسته‌سازی داراست.
                    </p>
                </div>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">ویژگی‌های برجسته</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
                        <div>
                            <strong className="text-gray-200 block mb-1">امنیت ۱۰۰٪ و حفظ حریم خصوصی</strong>
                            <span className="text-sm text-gray-400 leading-relaxed">تمامی پردازش‌ها مستقیماً درون مرورگر شما انجام می‌شود. هیچ فایلی به سرورهای ما ارسال نمی‌گردد.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
                        <div>
                            <strong className="text-gray-200 block mb-1">پردازش دسته‌ای (Batch Processing)</strong>
                            <span className="text-sm text-gray-400 leading-relaxed">صدها عکس را به صورت همزمان وارد کنید، تغییرات لازم را اعمال کرده و همه را در یک فایل ZIP دانلود کنید.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" />
                        <div>
                            <strong className="text-gray-200 block mb-1">پشتیبانی از فرمت‌های مدرن</strong>
                            <span className="text-sm text-gray-400 leading-relaxed">پشتیبانی کامل از فرمت‌های نسل جدید نظیر پردازش بومی HEIC، تبدیل WebP و خروجی فوق سبک AVIF.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </article>
);

export const SeoSpecific = ({ source, target }: { source: string, target: string }) => {
  const sourceInfo = formatInfo[source] || formatInfo.JPG;
  const targetInfo = formatInfo[target] || formatInfo.PNG;
  const compressionEstimate = getCompressionEstimate(source, target);
  
  return (
    <article className="max-w-5xl mx-auto mt-20 mb-32 px-4 rtl text-gray-300">
      <div className="bg-gradient-to-br from-cyan-950/40 to-purple-950/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 flex items-center gap-3">
              <ImageIcon className="text-cyan-400" size={36} />
              تبدیل {source} به {target} بدون افت کیفیت
          </h2>
          
          <div className="prose prose-invert prose-cyan max-w-none">
              <p className="text-lg leading-loose mb-8">
                  اگر به دنبال بهترین و سریع‌ترین روش برای <strong>تبدیل فایل {source} به {target}</strong> هستید، درست آمده‌اید. 
                  ابزار حرفه‌ای ما به گونه‌ای طراحی شده که می‌توانید فرمت عکس‌های خود را با حفظ بالاترین استانداردهای کیفی تغییر دهید. 
                  این مبدل آنلاین کاملاً رایگان بوده و نیاز به نصب هیچ‌گونه نرم‌افزار اضافی روی کامپیوتر یا موبایل شما ندارد.
              </p>

              {/* Format Comparison */}
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-black/30 p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <FileImage className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{sourceInfo.name}</h3>
                      <span className="text-xs text-gray-500">فرمت مبدا</span>
                    </div>
                  </div>
                  <p className="text-sm leading-loose text-gray-400 mb-4">{sourceInfo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sourceInfo.benefits.map((b, i) => (
                      <span key={i} className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-full">{b}</span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/30 p-6 rounded-2xl border border-cyan-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <FileImage className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{targetInfo.name}</h3>
                      <span className="text-xs text-gray-500">فرمت مقصد</span>
                    </div>
                  </div>
                  <p className="text-sm leading-loose text-gray-400 mb-4">{targetInfo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {targetInfo.benefits.map((b, i) => (
                      <span key={i} className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded-full">{b}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* How to Convert */}
              <div className="bg-black/30 p-6 rounded-2xl border border-cyan-500/10 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Wand2 className="text-purple-400" />
                  چگونه {source} را به {target} تبدیل کنیم؟
                </h3>
                <ol className="text-sm leading-loose text-gray-400 ml-4 list-decimal marker:text-cyan-400 space-y-3">
                  <li>فایل یا فایل‌های {source} خود را در کادر بالا رها کنید (کادر نقطه‌چین).</li>
                  <li>در منوی تنظیمات، در بخش تخصصی "فرمت نهایی"، گزینه <strong className="text-cyan-300">{target}</strong> را انتخاب کنید.</li>
                  <li>(اختیاری) می‌توانید از ابزارهای برش، تغییر سایز و یا فیلترهای نوری استفاده نمایید.</li>
                  <li>در نهایت دکمه <strong className="text-cyan-300">دانلود همه</strong> را بزنید تا فایل(های) پردازش شده دریافت گردد.</li>
                </ol>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-5 rounded-xl border border-cyan-500/20">
                  <div className="text-2xl font-black text-cyan-400 mb-2">{compressionEstimate}</div>
                  <div className="text-sm text-gray-400">تغییر حجم تقریبی</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-5 rounded-xl border border-purple-500/20">
                  <div className="text-2xl font-black text-purple-400 mb-2">۱۰۰٪</div>
                  <div className="text-sm text-gray-400">پردازش لوکال</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-transparent p-5 rounded-xl border border-green-500/20">
                  <div className="text-2xl font-black text-green-400 mb-2">نامحدود</div>
                  <div className="text-sm text-gray-400">تعداد فایل</div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="text-cyan-400" />
                  کاربردهای تبدیل {source} به {target}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-300 mb-2">مزایای این تبدیل:</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                      {targetInfo.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-green-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-300 mb-2">موارد استفاده:</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                      {targetInfo.useCases.map((u, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ArrowRight size={14} className="text-cyan-400" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-center font-bold text-cyan-200 mt-8 py-4 bg-cyan-950/30 rounded-xl border border-cyan-500/20">
                  امنیت تضمینی: تمامی پردازش‌های تبدیل {source} به {target} به صورت Offline-in-Browser انجام می‌گیرد.
              </p>
          </div>
      </div>
    </article>
  );
};