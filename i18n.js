// ShortsFinder i18n. English lives in the HTML (default + SEO); this file holds the other languages.
// Each language also has its own pre-rendered URL (/tr/, /es/, /de/ built by build_langs.mjs) for search engines.
// On those pages the language is fixed; the picker navigates between URLs.
// On the English root only, text is swapped in place: ?lang= → saved choice → first supported browser language → English.
// The root URL never redirects, so crawlers always get English there.
// Values may contain trusted inline HTML (<br>, <span class="grad-text">).
(() => {
const LANGS = { en: 'English', tr: 'Türkçe', es: 'Español', de: 'Deutsch' };
const G = s => `<span class="grad-text">${s}</span>`;

// Localized (not literal) copy. Tone: friendly creator-app voice, informal "you" (sen / tú / du).
// Spanish uses neutral "video" (LatAm + Spain friendly). Store lines follow each store's official badge wording.
const T = {
tr: {
  'meta.title': 'ShortsFinder — Yapay zekâyla YouTube videolarından Shorts oluştur',
  'meta.desc': 'Uzun YouTube videolarını yapay zekâyla Shorts’a çevir. ShortsFinder en çarpıcı anları bulur, dikey kliplere dönüştürür, altyazısını ekler; sana sadece düzenleyip indirmek kalır.',
  'nav.features': 'Özellikler', 'nav.how': 'Nasıl çalışır?', 'nav.shots': 'Ekranlar', 'nav.faq': 'SSS',
  'nav.download': 'Uygulamayı indir', 'nav.downloadShort': 'İndir',
  'store.ios': 'Hemen indir', 'store.play': 'Hemen indir',
  'hero.eyebrow': 'YAPAY ZEKÂ İLE',
  'hero.title': `Uzun videoyu at,<br>${G('Shorts’ları al.')}`,
  'hero.lead': 'YouTube linkini yapıştır, gerisini ShortsFinder halletsin. En iyi anları bulur, kısa videolara dönüştürür ve paylaşmaya hazır hale getirir.',
  'hero.p1': 'Ücretsiz dene', 'hero.p3': 'Montaj bilmene gerek yok',
  'hero.chip1': 'Güçlü an yakalandı', 'hero.chip2': '3 Shorts hazır',
  'what.eyebrow': 'Ne işe yarar?', 'what.title': `Tek uzun video, ${G('bir sürü Shorts.')}`,
  'what.lead': 'ShortsFinder videonu baştan sona izler ve izlenmeye değer anları bulur. Sonra bunları düzenlemeye hazır dikey videolara çevirir.',
  'what.ai': 'Yapay zekâ analizi', 'pipe.long': 'Uzun video', 'pipe.best': 'En iyi anlar',
  'how.eyebrow': 'Nasıl çalışır?', 'how.title': 'Uzun videodan Shorts’a<br>birkaç adımda.',
  'how.s1t': 'Linki yapıştır', 'how.s1p': 'Shorts’a çevirmek istediğin YouTube videosunun linkini ekle.',
  'how.s2t': 'En iyi anları yapay zekâ seçsin', 'how.s2p': 'İçeriği analiz eder, en çok ilgi çekecek anları ayıklar.',
  'how.s3t': 'Dilediğin gibi düzenle', 'how.s3p': 'Altyazıyı, stili, kadrajı ve süreyi kendine göre ayarla.',
  'how.s4t': 'İndir ve paylaş', 'how.s4p': 'Hazır videoyu indir, istediğin platformda paylaş.',
  'det.eyebrow': 'Yapay zekâyla an tespiti', 'det.title': 'O anı aramakla<br>uğraşma.',
  'det.lead': 'ShortsFinder senin yerine arar. Her sahneyi izlenme potansiyeline göre puanlar, en iyilerini sıralayıp önüne koyar.',
  'det.t1': 'Akılda kalan sözler', 'det.t2': 'Beklenmedik anlar', 'det.t3': 'Duygusal tepkiler', 'det.t4': 'Komik anlar',
  'det.t5': 'Etkileyici kapanışlar', 'det.t6': 'İlgi çekici sohbetler', 'det.t7': 'Enerjisi yüksek sahneler',
  'det.c1t': 'Nakavt', 'det.c1s': 'AI puanı · 0:24’lük klip', 'det.c2t': '12 an bulundu', 'det.c2s': 'En iyi 3’ü dahil',
  'beyond.eyebrow': 'Sadece konuşma değil', 'beyond.title': `Her güzel an<br>${G('söze ihtiyaç duymaz.')}`,
  'beyond.lead': 'ShortsFinder yalnızca söylenenlere değil, ekranda olup bitene de bakar.',
  'cat.n1': 'Podcast', 'cat.d1': 'İddialı çıkış', 'cat.n2': 'Röportaj', 'cat.d2': 'Can alıcı an',
  'cat.n3': 'Spor', 'cat.d3': 'Gol', 'cat.n4': 'Motor sporları', 'cat.d4': 'Sollama', 'cat.n5': 'Oyun', 'cat.d5': 'Clutch an',
  'cat.n6': 'Tepki videoları', 'cat.d6': 'Efsane tepki', 'cat.n7': 'Etkinlik & konser', 'cat.d7': 'Tribünler coştu', 'cat.n8': 'Eğitim', 'cat.d8': 'Altın bilgi',
  'cap.eyebrow': 'Otomatik altyazı', 'cap.title': 'İzleyiciyi videoda<br>tutan altyazılar.',
  'cap.lead': 'Altyazılar kendiliğinden oluşur ve kısa videoya göre tasarlanır. Stilini tek dokunuşla değiştir.',
  'cap.s1': 'Sade', 'cap.s2': 'Kalın', 'cap.s3': 'Vurgulu', 'cap.s4': 'Karaoke', 'cap.s5': 'Modern',
  'edit.eyebrow': 'Hızlı düzenleme', 'edit.title': 'Tarzını kat.',
  'edit.lead': 'Paylaşmadan önce her videoya son rötuşları yap. Zaman çizelgesiyle boğuşmak yok, öğrenme derdi yok.',
  'edit.t1': 'Süreyi kırp', 'edit.t2': 'Kadraj', 'edit.t3': 'Altyazı stili', 'edit.t4': 'Yazı tipi ve boyutu',
  'edit.t5': 'Yazı rengi', 'edit.t6': 'Yazı konumu', 'edit.t7': 'Hız', 'edit.t8': 'Ses ve sessize alma',
  'edit.note': 'Bilerek sade tuttuk: zor kısmı yapay zekâ hallediyor.',
  'ba.eyebrow': 'Önce / sonra', 'ba.title': `Tek video, ${G('üç Shorts.')}`, 'ba.turn': 'Uzun video', 'ba.into': 'Hazır Shorts’lar',
  'feat.eyebrow': 'Öne çıkanlar', 'feat.title': 'Shorts için gereken<br>her şey tek uygulamada.',
  'feat.f1t': 'Yapay zekâyla an tespiti', 'feat.f1p': 'Kesip paylaşmaya değer anları bulur.',
  'feat.f2t': 'Otomatik altyazı', 'feat.f2p': 'Temiz ve okunaklı altyazıları kendisi oluşturur.',
  'feat.f3t': 'Akıllı kadraj', 'feat.f3p': 'Yatay videoları dikey formata sığdırır.',
  'feat.f4t': 'Hazır stiller', 'feat.f4p': 'İçeriğine yakışan görünümü seç.',
  'feat.f5t': 'Hızlı dışa aktarma', 'feat.f5p': 'Videon kısa sürede indirilmeye hazır olur.',
  'feat.f6t': 'Kolay düzenleme', 'feat.f6p': 'Karmaşık editörlerle uğraşmadan son ayarları yap.',
  'shots.eyebrow': 'Ekranlar', 'shots.title': 'ShortsFinder’ı yakından tanı.',
  'shots.l1': 'Bul', 'shots.l2': 'İncele', 'shots.l3': 'Seç', 'shots.l4': 'Düzenle', 'shots.l5': 'Stil', 'shots.l6': 'İndir', 'shots.l7': 'Projeler', 'shots.l8': 'Hazır',
  'cta.eyebrow': 'Hazır mısın?', 'cta.title': 'Videolarını<br>Shorts’a dönüştür.', 'cta.lead': 'ShortsFinder’ı indir, en iyi anlarını hemen bulmaya başla.',
  'faq.eyebrow': 'SSS', 'faq.title': 'Aklına takılanlar',
  'faq.q1': 'ShortsFinder ne yapar?', 'faq.a1': 'Uzun videolardaki en güçlü anları yapay zekâyla bulur ve bunları kısa videolara dönüştürür.',
  'faq.q2': 'YouTube videolarıyla çalışıyor mu?', 'faq.a2': 'Evet. Desteklenen bir YouTube videosunun linkini uygulamaya yapıştırman yeterli; gerisini ShortsFinder halleder.',
  'faq.q3': 'Oluşan Shorts’ları düzenleyebilir miyim?', 'faq.a3': 'Evet. Altyazı, stil, kadraj, süre ve ses için pratik düzenleme araçları var.',
  'faq.q4': 'Videoları indirebilir miyim?', 'faq.a4': 'Evet. Hazır videoları dosya olarak indirip istediğin yerde kullanabilirsin.',
  'faq.q5': 'Videolarımı benim yerime paylaşıyor mu?', 'faq.a5': 'Şimdilik hayır. İlk sürüm video oluşturmaya ve indirmeye odaklanıyor; paylaşımı telefonundan kendin yapıyorsun. Doğrudan paylaşım ileride gelebilir.',
  'faq.q6': "En iyi hangi videolarla çalışır?",
  'faq.a6': "Podcast ve röportajlarda harika iş çıkarır; ama asıl farkı, en iyi anın konuşmadan oluştuğu videolarda görürsün: UFC ve MMA maçları, F1 yarışları, futbol maçları, oyun videoları, konserler. Yapay zekâ sadece konuşulanı değil, ekranda olanı da izler.",
  'faq.q7': "Telefonumdaki videoları kullanabilir miyim?",
  'faq.a7': "Evet. YouTube linkinin yanı sıra galerinden uzun bir video seçebilirsin; ShortsFinder en iyi anlarını aynı şekilde bulur.",
  'faq.q8': "ShortsFinder ücretli mi?",
  'faq.a8': "Uygulamayı indirmek ücretsiz, kullanım kredilerle. Her analizin kredisi videonun uzunluğuna göre belirlenir ve seçtiğin 3 Short buna dahildir; fazlası için birkaç kredi daha harcarsın. Abonelik yok, analiz başarısız olursa krediler iade edilir.",
  'faq.q9': "iPhone’da var mı?",
  'faq.a9': "ShortsFinder önce Android’de, Google Play’de yayında olacak. iPhone sürümü de planlarımızda.",
  'foot.tagline': 'Uzun videoyu at, Shorts’ları al.', 'foot.product': 'Ürün', 'foot.get': 'Uygulamayı indir',
  'foot.privacy': 'Gizlilik Politikası', 'foot.terms': 'Kullanım Koşulları', 'foot.rights': 'ShortsFinder. Tüm hakları saklıdır.', 'foot.made': 'İçerik üreticileri için tasarlandı.',
},
es: {
  'meta.title': 'ShortsFinder: crea Shorts de YouTube con IA',
  'meta.desc': 'Convierte tus videos largos de YouTube en Shorts que enganchan. ShortsFinder detecta los mejores momentos, los recorta en vertical, les pone subtítulos y te los deja listos para editar y descargar.',
  'nav.features': 'Funciones', 'nav.how': 'Cómo funciona', 'nav.shots': 'Capturas', 'nav.faq': 'Preguntas',
  'nav.download': 'Descargar la app', 'nav.downloadShort': 'Descargar',
  'store.ios': 'Descárgalo en el', 'store.play': 'Disponible en',
  'hero.eyebrow': 'CON INTELIGENCIA ARTIFICIAL',
  'hero.title': `Encuentra el momento.<br>Crea el ${G('Short.')}`,
  'hero.lead': 'Pega un enlace de YouTube y deja que ShortsFinder haga el resto: encuentra los mejores momentos, los convierte en videos cortos y te los deja listos para publicar.',
  'hero.p1': 'Empieza gratis', 'hero.p3': 'No necesitas saber editar',
  'hero.chip1': 'Momentazo detectado', 'hero.chip2': '3 Shorts listos',
  'what.eyebrow': 'Qué hace', 'what.title': `Un video largo. ${G('Un montón de Shorts.')}`,
  'what.lead': 'ShortsFinder revisa tu video de principio a fin y encuentra los momentos que valen la pena. Después los convierte en Shorts verticales listos para editar.',
  'what.ai': 'Análisis con IA', 'pipe.long': 'Video largo', 'pipe.best': 'Mejores momentos',
  'how.eyebrow': 'Cómo funciona', 'how.title': 'De un video largo a Shorts<br>en pocos pasos.',
  'how.s1t': 'Pega el enlace', 'how.s1p': 'Elige el video de YouTube que quieres convertir en Shorts.',
  'how.s2t': 'La IA elige lo mejor', 'how.s2p': 'Analiza el contenido y se queda con los momentos que más enganchan.',
  'how.s3t': 'Dale tu toque', 'how.s3p': 'Ajusta subtítulos, estilo, encuadre y duración a tu gusto.',
  'how.s4t': 'Descarga y publica', 'how.s4p': 'Exporta tu Short y súbelo a donde quieras.',
  'det.eyebrow': 'Detección de momentos con IA', 'det.title': 'Olvídate de buscar<br>el momento perfecto.',
  'det.lead': 'ShortsFinder lo encuentra por ti. Nuestra IA puntúa cada escena según su potencial para enganchar y te muestra las mejores, en orden.',
  'det.t1': 'Frases que marcan', 'det.t2': 'Momentos inesperados', 'det.t3': 'Reacciones emotivas', 'det.t4': 'Momentos graciosos',
  'det.t5': 'Cierres potentes', 'det.t6': 'Conversaciones interesantes', 'det.t7': 'Escenas con mucha energía',
  'det.c1t': 'Derribo', 'det.c1s': 'Puntuación IA · clip de 0:24', 'det.c2t': '12 momentos encontrados', 'det.c2s': 'Los 3 mejores, incluidos',
  'beyond.eyebrow': 'Mucho más que videos hablados', 'beyond.title': `No todos los grandes momentos<br>${G('necesitan palabras.')}`,
  'beyond.lead': 'ShortsFinder entiende lo que pasa en pantalla, no solo lo que se dice.',
  'cat.n1': 'Pódcasts', 'cat.d1': 'Opinión polémica', 'cat.n2': 'Entrevistas', 'cat.d2': 'El giro de la historia',
  'cat.n3': 'Deportes', 'cat.d3': 'Golazo', 'cat.n4': 'Automovilismo', 'cat.d4': 'Adelantamiento', 'cat.n5': 'Videojuegos', 'cat.d5': 'Jugada clutch',
  'cat.n6': 'Reacciones', 'cat.d6': 'Reacción épica', 'cat.n7': 'Eventos y conciertos', 'cat.d7': 'El público estalla', 'cat.n8': 'Educación', 'cat.d8': 'Idea clave',
  'cap.eyebrow': 'Subtítulos automáticos', 'cap.title': 'Subtítulos que<br>atrapan.',
  'cap.lead': 'Se generan solos y están pensados para video corto. Cambia el estilo con un toque.',
  'cap.s1': 'Minimal', 'cap.s2': 'Negrita', 'cap.s3': 'Resaltado', 'cap.s4': 'Karaoke', 'cap.s5': 'Moderno',
  'edit.eyebrow': 'Edición rápida', 'edit.title': 'Dale tu estilo.',
  'edit.lead': 'Retoca cada Short antes de exportarlo. Sin líneas de tiempo ni complicaciones.',
  'edit.t1': 'Recortar duración', 'edit.t2': 'Encuadre', 'edit.t3': 'Estilo de subtítulos', 'edit.t4': 'Fuente y tamaño',
  'edit.t5': 'Color del texto', 'edit.t6': 'Posición del texto', 'edit.t7': 'Velocidad', 'edit.t8': 'Volumen y silencio',
  'edit.note': 'Simple a propósito: la IA se encarga de lo difícil.',
  'ba.eyebrow': 'Antes y después', 'ba.title': `Un video. ${G('Tres Shorts.')}`, 'ba.turn': 'De esto…', 'ba.into': '…a esto',
  'feat.eyebrow': 'Funciones principales', 'feat.title': 'Todo lo que necesitas<br>para crear Shorts.',
  'feat.f1t': 'Detección de momentos con IA', 'feat.f1p': 'Encuentra los momentos que merecen un clip.',
  'feat.f2t': 'Subtítulos automáticos', 'feat.f2p': 'Subtítulos limpios sin escribir una sola palabra.',
  'feat.f3t': 'Reencuadre inteligente', 'feat.f3p': 'Pasa tus videos horizontales a formato vertical.',
  'feat.f4t': 'Estilos para todo', 'feat.f4p': 'Elige el look que mejor va con tu contenido.',
  'feat.f5t': 'Exportación rápida', 'feat.f5p': 'Tus videos, listos para descargar en un momento.',
  'feat.f6t': 'Edición sin complicaciones', 'feat.f6p': 'Haz los últimos ajustes sin pelearte con un editor.',
  'shots.eyebrow': 'Capturas', 'shots.title': 'Así es ShortsFinder.',
  'shots.l1': 'Buscar', 'shots.l2': 'Analizar', 'shots.l3': 'Elegir', 'shots.l4': 'Editar', 'shots.l5': 'Estilo', 'shots.l6': 'Exportar', 'shots.l7': 'Proyectos', 'shots.l8': 'Listo',
  'cta.eyebrow': '¿Empezamos?', 'cta.title': 'Convierte tus videos<br>en Shorts.', 'cta.lead': 'Descarga ShortsFinder y empieza a sacarle partido a tus mejores momentos.',
  'faq.eyebrow': 'Preguntas frecuentes', 'faq.title': 'Lo que más nos preguntan',
  'faq.q1': '¿Qué es ShortsFinder?', 'faq.a1': 'Una app que usa IA para encontrar los mejores momentos de tus videos largos y convertirlos en videos cortos.',
  'faq.q2': '¿Funciona con videos de YouTube?', 'faq.a2': 'Sí. Solo tienes que pegar en la app el enlace de un video de YouTube compatible y ShortsFinder se encarga del resto.',
  'faq.q3': '¿Puedo editar los Shorts?', 'faq.a3': 'Sí. Puedes ajustar subtítulos, estilo, encuadre, duración y audio con herramientas sencillas.',
  'faq.q4': '¿Puedo descargar los videos?', 'faq.a4': 'Sí. Cuando tu Short esté listo, lo exportas como archivo de video.',
  'faq.q5': '¿ShortsFinder publica mis videos por mí?', 'faq.a5': 'Por ahora no. La primera versión se centra en crear y exportar Shorts; los publicas tú desde tu teléfono. Más adelante podríamos añadir la publicación directa.',
  'faq.q6': "¿Con qué videos funciona mejor?",
  'faq.a6': "Con podcasts y entrevistas, claro, pero también con videos donde el mejor momento no necesita palabras: peleas de UFC y MMA, carreras de F1, partidos de fútbol, gaming, conciertos y eventos. La IA no solo escucha, también mira lo que pasa en pantalla.",
  'faq.q7': "¿Puedo usar videos de mi teléfono?",
  'faq.a7': "Sí. Además de enlaces de YouTube, puedes elegir un video largo de tu galería y ShortsFinder encontrará sus mejores momentos igual.",
  'faq.q8': "¿Cuánto cuesta ShortsFinder?",
  'faq.a8': "La app se descarga gratis y funciona con créditos. Cada análisis cuesta según la duración del video e incluye 3 Shorts a tu elección; si quieres más, son unos pocos créditos extra. Sin suscripción, y si un análisis falla, te devolvemos los créditos.",
  'faq.q9': "¿Está disponible para iPhone?",
  'faq.a9': "ShortsFinder llega primero a Android, en Google Play. La versión para iPhone está en camino.",
  'foot.tagline': 'Encuentra el momento. Crea el Short.', 'foot.product': 'Producto', 'foot.get': 'Descarga la app',
  'foot.privacy': 'Privacidad', 'foot.terms': 'Términos y condiciones', 'foot.rights': 'ShortsFinder. Todos los derechos reservados.', 'foot.made': 'Hecho para creadores.',
},
de: {
  'meta.title': 'ShortsFinder – YouTube Shorts mit KI erstellen',
  'meta.desc': 'Mach aus langen YouTube-Videos Shorts, die hängen bleiben. ShortsFinder findet die besten Momente, schneidet sie ins Hochformat und setzt Untertitel – du musst nur noch feinschleifen und herunterladen.',
  'nav.features': 'Funktionen', 'nav.how': 'So geht’s', 'nav.shots': 'Screenshots', 'nav.faq': 'FAQ',
  'nav.download': 'App holen', 'nav.downloadShort': 'Laden',
  'store.ios': 'Laden im', 'store.play': 'Jetzt bei',
  'hero.eyebrow': 'MIT KI',
  'hero.title': `Momente finden.<br>${G('Shorts')} machen.`,
  'hero.lead': 'Link einfügen, fertig: ShortsFinder findet die stärksten Momente in deinem YouTube-Video, macht daraus Kurzvideos und bereitet sie zum Posten vor.',
  'hero.p1': 'Kostenlos ausprobieren', 'hero.p3': 'Ganz ohne Schnitt-Know-how',
  'hero.chip1': 'Highlight erkannt', 'hero.chip2': '3 Shorts fertig',
  'what.eyebrow': 'Was die App macht', 'what.title': `Ein langes Video. ${G('Jede Menge Shorts.')}`,
  'what.lead': 'ShortsFinder schaut sich dein Video komplett an und findet die Stellen, die sich lohnen. Daraus werden Shorts im Hochformat, bereit zum Bearbeiten.',
  'what.ai': 'KI-Analyse', 'pipe.long': 'Langes Video', 'pipe.best': 'Highlights',
  'how.eyebrow': 'So geht’s', 'how.title': 'Vom langen Video zum Short –<br>in wenigen Schritten.',
  'how.s1t': 'Link einfügen', 'how.s1p': 'Wähl das YouTube-Video, aus dem Shorts werden sollen.',
  'how.s2t': 'Die KI findet die Highlights', 'how.s2p': 'Sie analysiert den Inhalt und pickt die stärksten Momente heraus.',
  'how.s3t': 'Feinschliff', 'how.s3p': 'Untertitel, Stil, Bildausschnitt und Länge nach Wunsch anpassen.',
  'how.s4t': 'Runterladen & posten', 'how.s4p': 'Short exportieren und teilen, wo du willst.',
  'det.eyebrow': 'KI-Highlight-Erkennung', 'det.title': 'Schluss mit der Suche<br>nach dem einen Moment.',
  'det.lead': 'Das übernimmt ShortsFinder. Unsere KI bewertet jede Szene danach, wie gut sie ankommt, und zeigt dir die besten zuerst.',
  'det.t1': 'Starke Aussagen', 'det.t2': 'Überraschende Wendungen', 'det.t3': 'Emotionale Reaktionen', 'det.t4': 'Lustige Momente',
  'det.t5': 'Starke Pointen', 'det.t6': 'Spannende Gespräche', 'det.t7': 'Szenen voller Energie',
  'det.c1t': 'Niederschlag', 'det.c1s': 'KI-Score · 0:24-Clip', 'det.c2t': '12 Momente gefunden', 'det.c2s': 'Top 3 inklusive',
  'beyond.eyebrow': 'Nicht nur Talk', 'beyond.title': `Große Momente brauchen<br>${G('nicht immer Worte.')}`,
  'beyond.lead': 'ShortsFinder versteht, was im Bild passiert – nicht nur, was gesagt wird.',
  'cat.n1': 'Podcasts', 'cat.d1': 'Steile These', 'cat.n2': 'Interviews', 'cat.d2': 'Die Pointe',
  'cat.n3': 'Sport', 'cat.d3': 'Traumtor', 'cat.n4': 'Motorsport', 'cat.d4': 'Überholmanöver', 'cat.n5': 'Gaming', 'cat.d5': 'Clutch-Moment',
  'cat.n6': 'Reactions', 'cat.d6': 'Krasse Reaktion', 'cat.n7': 'Events & Konzerte', 'cat.d7': 'Stimmung kocht', 'cat.n8': 'Wissen', 'cat.d8': 'Aha-Moment',
  'cap.eyebrow': 'Automatische Untertitel', 'cap.title': 'Untertitel, bei denen<br>keiner weiterwischt.',
  'cap.lead': 'Werden automatisch erstellt und sind fürs Kurzvideo gemacht. Stil wechseln? Ein Tipp genügt.',
  'cap.s1': 'Minimal', 'cap.s2': 'Fett', 'cap.s3': 'Highlight', 'cap.s4': 'Karaoke', 'cap.s5': 'Modern',
  'edit.eyebrow': 'Schnell bearbeitet', 'edit.title': 'Gib ihm deinen Stil.',
  'edit.lead': 'Der letzte Feinschliff vor dem Export – ohne Timeline, ohne Einarbeitung.',
  'edit.t1': 'Länge kürzen', 'edit.t2': 'Bildausschnitt', 'edit.t3': 'Untertitel-Stil', 'edit.t4': 'Schrift & Größe',
  'edit.t5': 'Textfarbe', 'edit.t6': 'Textposition', 'edit.t7': 'Geschwindigkeit', 'edit.t8': 'Lautstärke & Stumm',
  'edit.note': 'Bewusst einfach gehalten – die schwere Arbeit macht die KI.',
  'ba.eyebrow': 'Vorher / nachher', 'ba.title': `Ein Video. ${G('Drei Shorts.')}`, 'ba.turn': 'Aus dem hier …', 'ba.into': '… wird das hier',
  'feat.eyebrow': 'Funktionen', 'feat.title': 'Alles, was du für<br>deine Shorts brauchst.',
  'feat.f1t': 'KI-Highlight-Erkennung', 'feat.f1p': 'Findet die Momente, die einen Clip wert sind.',
  'feat.f2t': 'Automatische Untertitel', 'feat.f2p': 'Saubere Untertitel, ganz ohne Abtippen.',
  'feat.f3t': 'Smartes Reframing', 'feat.f3p': 'Macht aus Querformat automatisch Hochformat.',
  'feat.f4t': 'Viele Stile', 'feat.f4p': 'Wähl den Look, der zu deinem Content passt.',
  'feat.f5t': 'Schneller Export', 'feat.f5p': 'Dein Video ist im Handumdrehen downloadbereit.',
  'feat.f6t': 'Einfach bearbeiten', 'feat.f6p': 'Letzte Anpassungen ohne komplizierten Editor.',
  'shots.eyebrow': 'Screenshots', 'shots.title': 'So sieht ShortsFinder aus.',
  'shots.l1': 'Finden', 'shots.l2': 'Analysieren', 'shots.l3': 'Auswählen', 'shots.l4': 'Bearbeiten', 'shots.l5': 'Stil', 'shots.l6': 'Exportieren', 'shots.l7': 'Projekte', 'shots.l8': 'Fertig',
  'cta.eyebrow': 'Bereit?', 'cta.title': 'Mach aus deinen Videos<br>Shorts.', 'cta.lead': 'Hol dir ShortsFinder und finde deine besten Momente.',
  'faq.eyebrow': 'FAQ', 'faq.title': 'Häufige Fragen',
  'faq.q1': 'Was ist ShortsFinder?', 'faq.a1': 'Eine App, die mit KI die stärksten Momente in langen Videos findet und daraus Kurzvideos macht.',
  'faq.q2': 'Funktioniert das mit YouTube-Videos?', 'faq.a2': 'Ja. Einfach den Link zu einem unterstützten YouTube-Video in die App kopieren – den Rest erledigt ShortsFinder.',
  'faq.q3': 'Kann ich die Shorts noch bearbeiten?', 'faq.a3': 'Ja. Untertitel, Stil, Bildausschnitt, Länge und Ton lassen sich mit einfachen Tools anpassen.',
  'faq.q4': 'Kann ich die Videos herunterladen?', 'faq.a4': 'Ja. Fertige Shorts exportierst du als Videodatei.',
  'faq.q5': 'Postet ShortsFinder meine Videos automatisch?', 'faq.a5': 'Noch nicht. Die erste Version konzentriert sich aufs Erstellen und Exportieren – gepostet wird vom Handy aus. Direktes Posten kommt eventuell später.',
  'faq.q6': "Mit welchen Videos funktioniert es am besten?",
  'faq.a6': "Mit Podcasts und Interviews sowieso – aber auch mit Videos, deren bester Moment ganz ohne Worte auskommt: UFC- und MMA-Kämpfe, F1-Rennen, Fußballspiele, Gaming, Konzerte und Events. Die KI hört nicht nur zu, sie schaut auch hin.",
  'faq.q7': "Kann ich Videos von meinem Handy nutzen?",
  'faq.a7': "Ja. Neben YouTube-Links kannst du ein langes Video aus deiner Galerie wählen – ShortsFinder findet die besten Momente genauso.",
  'faq.q8': "Was kostet ShortsFinder?",
  'faq.a8': "Der Download ist kostenlos, bezahlt wird mit Credits. Jede Analyse kostet je nach Videolänge und enthält 3 Shorts deiner Wahl; weitere Shorts kosten ein paar Credits extra. Kein Abo – und schlägt eine Analyse fehl, bekommst du die Credits zurück.",
  'faq.q9': "Gibt es ShortsFinder fürs iPhone?",
  'faq.a9': "ShortsFinder startet zuerst auf Android bei Google Play. Eine iPhone-Version ist geplant.",
  'foot.tagline': 'Momente finden. Shorts machen.', 'foot.product': 'Produkt', 'foot.get': 'App holen',
  'foot.privacy': 'Datenschutz', 'foot.terms': 'AGB', 'foot.rights': 'ShortsFinder. Alle Rechte vorbehalten.', 'foot.made': 'Für Creator gemacht.',
},
};

if (typeof document === 'undefined') { module.exports = { LANGS, T }; return; } // build_langs.mjs

const ok = l => Object.hasOwn(LANGS, l);
const page = document.documentElement.lang; // 'en' on the root, else a pre-rendered /xx/ page
const pick = () => {
  const q = new URLSearchParams(location.search).get('lang');
  if (ok(q)) return q;
  try { const s = localStorage.getItem('sf-lang'); if (ok(s)) return s; } catch (e) {}
  for (const l of navigator.languages || [navigator.language]) {
    const base = String(l || '').slice(0, 2).toLowerCase();
    if (ok(base)) return base;
  }
  return 'en';
};

const metaDesc = document.querySelector('meta[name="description"]');
const EN = { 'meta.title': document.title, 'meta.desc': metaDesc && metaDesc.content };
const els = [...document.querySelectorAll('[data-i18n]')];
els.forEach(el => { EN[el.dataset.i18n] ??= el.innerHTML; });

function apply(lang) {
  const t = T[lang] || {};
  const get = k => t[k] ?? EN[k];
  document.documentElement.lang = lang;
  els.forEach(el => { el.innerHTML = get(el.dataset.i18n); });
  if (EN['meta.title']) document.title = get('meta.title');
  if (metaDesc) metaDesc.content = get('meta.desc');
  document.querySelectorAll('.lang-select').forEach(s => { s.value = lang; });
}

document.querySelectorAll('.lang-select').forEach(s => {
  s.innerHTML = Object.entries(LANGS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');
  s.addEventListener('change', () => {
    try { localStorage.setItem('sf-lang', s.value); } catch (e) {}
    if (page === 'en' && s.value === 'en') apply('en');
    else location.href = (s.value === 'en' ? '/' : `/${s.value}/`) + location.hash;
  });
});

if (page === 'en') apply(pick());
else document.querySelectorAll('.lang-select').forEach(s => { s.value = page; });
})();
