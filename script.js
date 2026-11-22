const defaultConfig = {
  brand_name: 'D Creations'
  , tagline: 'Handcrafted with Love'
  , cat_bangles: 'Kundan Bangles'
  , cat_glass_bangles: 'Glass Bangles'
  , cat_hair: 'Hair Accessories'
  , cat_earrings: 'Earrings'
  , cat_pins: 'Saree Pins'
  , cat_necksets: 'Neck Sets'
  , cat_gifts: 'Return Gifts'
  , footer_text: '© 2026 D Creations. All rights reserved.'
  , background_color: '#1c110e'
  , surface_color: '#2b1b16'
  , text_color: '#F5F5F5'
  , primary_action_color: '#D4AF37'
  , secondary_action_color: '#C4A484'
  , font_family: 'Playfair Display'
  , font_size: 16
};
const categories = [
  {
    id: 'bangles',
    key: 'cat_bangles',
    emoji: '💫',
    image: 'images/peacock_design_bangles.png',
    gradient: 'linear-gradient(135deg, #5C1A1B, #A47148)',
    desc: 'Beautiful handmade bangles designed to complement every outfit and occasion.',
    products: [
      {
        name: 'Kundan Raindrop Bangles', price: '₹850', emoji: '🌸',
        desc: 'Exquisite handcrafted bangles featuring classic kundan raindrop motifs, perfect for festive wear.', image: 'images/kundan_raindrop_bangles.png',
        features: ['No. of Bangles: Available for one or two hands', 'Sizes & Colours: Upto size 2.8. Stone colors customizable.', 'Dispatch Timeline: 2-4 days', 'Customization: Click buy now to customize']
      },
      {
        name: 'Flower Bangles', price: '₹850', emoji: '✨',
        desc: 'Delicate floral pattern bangles designed to add a vibrant and youthful charm to any traditional attire.', image: 'images/flower_bangles.png',
        features: ['No. of Bangles: Set of 2 bangles', 'Sizes & Colours: Sizes 2.2 to 2.8. Floral colors can be customized.', 'Dispatch Timeline: 2-5 days', 'Customization: Custom floral colors available on request']
      },
      {
        name: 'Kundan Stone Bangles', price: '₹900', emoji: '💎',
        desc: 'Premium kundan stone-embedded bangles offering a truly regal aesthetic for grand celebrations.', image: 'images/kundan_stone_bangles.png',
        features: ['No. of Bangles: Heavy set for both hands', 'Sizes & Colours: All standard sizes. Stone colors customizable.', 'Dispatch Timeline: 3-6 days', 'Customization: Premium stone customization available']
      },
      {
        name: 'Kundan Bangles', price: '₹750', emoji: '🎨',
        desc: 'An opulent, heavy kundan set meticulously crafted as a striking statement piece for a single hand.', image: 'images/kundan_bangles.png',
        features: ['No. of Bangles: 1 Statement Piece (Single Hand)', 'Sizes & Colours: Sizes upto 2.8 available.', 'Dispatch Timeline: 2-4 days', 'Customization: Click buy now for customization']
      },
      {
        name: 'Lotus Design Bangles', price: '₹900', emoji: '🪙',
        desc: 'Intricately carved timeless bangles showcasing beautiful lotus patterns in a rich, antique gold finish.', image: 'images/lotus_design_bangles.png',
        features: ['No. of Bangles: Available for one or two hands', 'Sizes & Colours: Antique gold finish. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 3-5 days', 'Customization: Engraving and polish customization available']
      },
      {
        name: 'Lotus Design Bangles', price: '₹900', emoji: '🌹',
        desc: 'Stunning lotus design bangles enhanced with vibrant green accents, bringing a touch of nature to your traditional ensemble.', image: 'images/lotus_design_green_bangles.png',
        features: ['No. of Bangles: Available for one or two hands', 'Sizes & Colours: Green accents (can be changed to Ruby/Pink). Sizes upto 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Accent enamel color can be customized']
      },
      {
        name: 'Lotus Kundan Bangles', price: '₹400-450', emoji: '🌹',
        desc: 'A majestic fusion of lotus motifs and sparkling kundan stones, offering a rich and colorful traditional look.', image: 'images/lotus_kundan_bangles.png',
        features: ['No. of Bangles: Single hand bangle', 'Sizes & Colours: Base gold with kundan stones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 1-3 days (Fast Dispatch)', 'Customization: Quick dispatch available']
      },
      {
        name: 'Elephant Design Bangles', price: '₹1900', emoji: '🐘',
        desc: 'Regal elephant-themed bangles symbolizing strength and wisdom, intricately crafted with colorful accents.', image: 'images/elephant_design_bangles.png',
        features: ['No. of Bangles: Premium heavy set for both hands', 'Sizes & Colours: Regal multicolored accents. All standard sizes.', 'Dispatch Timeline: 5-7 days (Intricate Craftsmanship)', 'Customization: Fully customizable stone layout']
      },
      {
        name: 'Peacock Design Bangles', price: '₹950', emoji: '🦚',
        desc: 'Gorgeous peacock design bangles that capture the beauty of the national bird with exquisite detailing and green hues.', image: 'images/peacock_design_bangles.png',
        features: ['No. of Bangles: Set for both hands', 'Sizes & Colours: Peacock green and blue hues. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 3-5 days', 'Customization: Enamel colors can be modified via WhatsApp']
      },
      {
        name: 'Gold kundan Bangles', price: '₹680', emoji: '🌹',
        desc: 'A stunning single-hand gold kundan bangle piece, perfectly crafted to elevate your ethnic wardrobe.', image: 'images/gold_kundan_bangles.png',
        features: ['No. of Bangles: Single bangle piece', 'Sizes & Colours: Pure gold look. Sizes upto 2.8.', 'Dispatch Timeline: 2-4 days', 'Customization: Polish shade can be customized']
      },
      {
        name: 'kundan Bangles', price: '₹900', emoji: '🌹',
        desc: 'Classic kundan bangles featuring a traditional design that perfectly blends grace with grand heritage styling.', image: 'images/kundan_bangles(1).png',
        features: ['No. of Bangles: Set of 2 (Pair)', 'Sizes & Colours: Heritage gold finish. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Stone and bead customization available']
      },
      {
        name: 'kundan Bangles', price: '₹970', emoji: '🌹',
        desc: 'Luxurious kundan bangles meticulously designed to be the highlight of your jewelry collection.', image: 'images/kundan_bangles(3).png',
        features: ['No. of Bangles: Statement pair', 'Sizes & Colours: Luxurious kundan finish. All standard sizes.', 'Dispatch Timeline: 3-5 days', 'Customization: Click buy now for customization']
      },
      {
        name: 'Peacock green kundan Bangles', price: '₹750', emoji: '🌹',
        desc: 'Vibrant peacock green kundan bangles offering a unique pop of color and unparalleled elegance.', image: 'images/peacock_green_kundan_bangles.png',
        features: ['No. of Bangles: Pair of bangles', 'Sizes & Colours: Peacock green stones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Stone color can be customized to ruby or emerald']
      },
      {
        name: 'Gold pair kundan Bangles', price: '₹380', emoji: '🌹',
        desc: 'A beautiful pair of gold kundan bangles that provide a classic and symmetrical charm to both hands.', image: 'images/gold_pair_kundan_bangles.png',
        features: ['No. of Bangles: 1 Pair (2 Bangles)', 'Sizes & Colours: Classic gold. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 1-3 days', 'Customization: Fast shipping, minimal customization']
      },
      {
        name: 'Elephant design kundan Bangles', price: '₹1500', emoji: '🌹',
        desc: 'Majestic kundan bangles featuring royal elephant motifs, blending traditional artistry with premium stones.', image: 'images/elephant_design_kundan_bangles.png',
        features: ['No. of Bangles: Heavy statement pair', 'Sizes & Colours: Premium kundan stones. Sizes upto 2.8.', 'Dispatch Timeline: 4-7 days', 'Customization: Elephant motif detailing can be customized']
      },
      {
        name: 'Thread Bangles', price: '₹400', emoji: '🌹',
        desc: 'Vibrantly colored thread bangles accented with stone work, perfect for adding a lively touch to both hands.', image: 'images/thread_bangles.png',
        features: ['No. of Bangles: Set of thread bangles', 'Sizes & Colours: Vibrantly colored threads. Custom colors available.', 'Dispatch Timeline: 2-4 days', 'Customization: Specify thread colors during checkout']
      },
      {
        name: 'Lotus Design kundan Bangles', price: '₹700', emoji: '🌹',
        desc: 'A single-hand lotus kundan bangle piece offering a sophisticated and detailed floral arrangement in gold.', image: 'images/lotus_kundan_bangles(1).png',
        features: ['No. of Bangles: Single hand piece', 'Sizes & Colours: Gold with floral arrangement. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Custom pearl drops available']
      },
      {
        name: 'Lotus Design Bangles', price: '₹700', emoji: '🌹',
        desc: 'Elegant single-hand lotus design bangle, showcasing refined craftsmanship and subtle aesthetic appeal.', image: 'images/lotus_kundan_bangles(2).png',
        features: ['No. of Bangles: Single hand bangle', 'Sizes & Colours: Subtle gold finish. Sizes upto 2.8.', 'Dispatch Timeline: 2-4 days', 'Customization: Stone customization available']
      },
      {
        name: 'Lotus Design Bangles', price: '₹800', emoji: '🌹',
        desc: 'A statement single-hand lotus bangle that seamlessly merges traditional motifs with contemporary grace.', image: 'images/lotus_kundan_bangles(3).png',
        features: ['No. of Bangles: Single hand statement piece', 'Sizes & Colours: Contemporary gold. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 3-5 days', 'Customization: Click buy now for customization']
      },
      {
        name: 'Lotus Design Bangles', price: '₹1600', emoji: '🌹',
        desc: 'A complete set of lotus design bangles for both hands, providing a unified and grandiose traditional appearance.', image: 'images/lotus_kundan_bangles(4).png',
        features: ['No. of Bangles: Complete grand set for both hands', 'Sizes & Colours: Traditional grand appearance. Sizes upto 2.8.', 'Dispatch Timeline: 5-8 days', 'Customization: Bridal set customization available']
      },
      {
        name: 'Parrot Design Bangles', price: '₹1450', emoji: '🦜',
        desc: 'Parrot design bangles crafted for a single hand, featuring intricate parrot and sophisticated styling.', image: 'images/parrot_bangles.png',
        features: ['No. of Bangles: Two hand piece', 'Sizes & Colours: Parrot green and ruby tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Rose Design Bangles', price: '₹900', emoji: '🌹',
        desc: 'Romantic rose design bangles crafted for a single hand, featuring intricate petals and sophisticated styling.', image: 'images/rose_design_bangles.png',
        features: ['No. of Bangles: Single hand piece', 'Sizes & Colours: Rose gold and ruby tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Peacock purple Design Bangles', price: '₹1400', emoji: '🌹',
        desc: 'Peacock purple design bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/peacock_purple_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: purple and green tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'lakshmi devi gold Design Bangles', price: '₹750', emoji: '🌹',
        desc: 'lakshmi devi gold design bangles crafted for a single hand, featuring intricate petals and sophisticated styling.', image: 'images/lakshmi_devi_design_bangles.png',
        features: ['No. of Bangles: Single hand piece', 'Sizes & Colours:  gold and lakshmi devi designed bangles. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'lakshmi devi gold Design Bangles', price: '₹1050', emoji: '🌹',
        desc: 'lakshmi devi gold design bangles crafted for a single hand, featuring intricate petals and sophisticated styling.', image: 'images/lakshmi_devi_design_bangles(1).png',
        features: ['No. of Bangles: Single hand piece', 'Sizes & Colours:  gold and lakshmi devi designed bangles. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'lakshmi kasulu Bangles', price: '₹550', emoji: '🌹',
        desc: 'lakshmi kasulu design bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lakshmi_kasulu_bangles(1).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: gold and lakshmi devi designed bangles. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Ganesh Design Bangles', price: '₹600', emoji: '🌹',
        desc: 'ganesh design bangles crafted for a single hand, featuring intricate petals and sophisticated styling.', image: 'images/ganesh_design_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours:  gold and ganesh pendents Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Ganesh Design Bangles', price: '₹1400', emoji: '🌹',
        desc: 'ganesh design bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/ganesh_design_bangles(1).png',
        features: ['No. of Bangles: Single hand piece', 'Sizes & Colours: Rose gold and ruby tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Rose Design Bangles', price: '₹1300', emoji: '🌹',
        desc: 'Romantic rose design bangles crafted for a single hand, featuring intricate petals and sophisticated styling.', image: 'images/rose_design_bangles(1).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Rose gold and ruby tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Rose Design Bangles', price: '₹460', emoji: '🌹',
        desc: 'Romantic rose design bangles crafted for a single hand, featuring intricate petals and sophisticated styling.', image: 'images/rose_design_bangles(2).png',
        features: ['No. of Bangles: Single hand piece', 'Sizes & Colours: Rose gold and ruby tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Rose Design Bangles', price: '₹750', emoji: '🌹',
        desc: 'Romantic rose design bangles crafted for a single hand, featuring intricate petals and sophisticated styling.', image: 'images/rose_design_bangles(3).png',
        features: ['No. of Bangles: Single hand piece', 'Sizes & Colours: Rose gold and ruby tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Kundan Design green Bangles', price: '₹600', emoji: '🌹',
        desc: 'Kundan Design green bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/kundan_design_green_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Green tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Kundan Design pink lotus Bangles', price: '₹750', emoji: '🌹',
        desc: 'Kundan Design pink lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/kundan_design_pink_lotus_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Pink lotus tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Kundan Design peacock green Bangles', price: '₹600', emoji: '🌹',
        desc: 'Kundan Design peacock green bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/kundan_design_peacock_green_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Peacock green tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Kundan Design blue Bangles', price: '₹850', emoji: '🌹',
        desc: 'Kundan Design blue bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/kundan_design_blue_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Blue tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Kundan Design purple Bangles', price: '₹850', emoji: '🌹',
        desc: 'Kundan Design purple bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/kundan_design_purple_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Purple tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Kundan Design pink Bangles', price: '₹700', emoji: '🌹',
        desc: 'Kundan Design pink bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/kundan_design_pink_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Pink tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Kundan flower Bangles', price: '₹450', emoji: '🌹',
        desc: 'Kundan bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/kundan_design_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Peacock green tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Kundan Design lotus Bangles', price: '₹500', emoji: '🌹',
        desc: 'Kundan Design lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/kundan_design_lotus_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Lotu tones. Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Elephant lotus Bangles', price: '₹1650', emoji: '🌹',
        desc: 'Elephant lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/elephant_lotus_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Red and Emerald green . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
       {
        name: 'Elephant Bangles', price: '₹900', emoji: '🌹',
        desc: 'Elephant bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/elephant_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Red and Emerald green . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
       {
        name: 'lotus Bangles', price: '₹750', emoji: '🌹',
        desc: 'Lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lotus_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Red and Emerald green . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Elephant Bangles', price: '₹1000', emoji: '🌹',
        desc: 'Elephant bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/elephant_bangles(1).png',
        features: ['No. of Bangles: one hand piece', 'Sizes & Colours: Red and green . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Name Bangles', price: '₹1850', emoji: '🌹',
        desc: 'Name bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/name_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: teal blue . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
       {
        name: 'Flower Bangles', price: '₹1700', emoji: '🌹',
        desc: 'Flower bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/flower_bangles(1).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: teal blue . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Rose Bangles', price: '₹1300', emoji: '🌹',
        desc: 'Rose bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/rose_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Pink and teal blue . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Peacock Bangles', price: '₹1450', emoji: '🌹',
        desc: 'Peacock bangles crafted for a both hands, featuring intricate feathers and sophisticated styling.', image: 'images/peacock_bangles.png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Violet and peacock green . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Feather color customization available']
      },
       {
        name: 'lotus Bangles', price: '₹1450', emoji: '🌹',
        desc: 'Lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lotus_bangles(1).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Red and green . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Lotus Bangles', price: '₹450', emoji: '🌹',
        desc: 'Lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lotus_bangles(2).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Turquoise blue . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
       {
        name: 'Peacock Bangles', price: '₹1850', emoji: '🌹',
        desc: 'Peacock bangles crafted for a both hands, featuring intricate feathers and sophisticated styling.', image: 'images/peacock_bangles(2).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Pink, Violet and Rama green  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Feather color customization available']
      },
      {
        name: 'Lotus Bangles', price: '₹650', emoji: '🌹',
        desc: 'Lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lotus_bangles(3).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Red and  green  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Peacock Bangles', price: '₹2000', emoji: '🌹',
        desc: 'Peacock bangles crafted for a both hands, featuring intricate feathers and sophisticated styling.', image: 'images/peacock_bangles(3).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Black and gold  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Feather color customization available']
      },
      {
        name: 'Lotus Bangles', price: '₹1500', emoji: '🌹',
        desc: 'Lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lotus_bangles(4).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Red and  gold  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
     {
        name: 'Parrot Bangles', price: '₹1200', emoji: '🌹',
        desc: 'Parrot bangles crafted for a both hands, featuring intricate feathers and sophisticated styling.', image: 'images/parrot_bangles(1).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Multi colour  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Feather color customization available']
      },
     {
        name: 'Peacock Bangles', price: '₹1500', emoji: '🌹',
        desc: 'Peacock bangles crafted for a both hands, featuring intricate feathers and sophisticated styling.', image: 'images/peacock_bangles(4).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Purple and pink  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Feather color customization available']
      },
      {
        name: 'Lotus Bangles', price: '₹1500', emoji: '🌹',
        desc: 'Lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lotus_bangles(5).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Purple and gold  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
    {
        name: 'Elephant Bangles', price: '₹1500', emoji: '🌹',
        desc: 'Elephant bangles crafted for a both hands, featuring intricate patterns and sophisticated styling.', image: 'images/elephant_bangles(2).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Pink and green  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Pattern color customization available']
      },
    {
        name: 'Elephant Bangles', price: '₹1500', emoji: '🌹',
        desc: 'Elephant bangles crafted for a both hands, featuring intricate patterns and sophisticated styling.', image: 'images/elephant_bangles(3).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Red and green  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Pattern color customization available']
      },
    {
        name: 'Elephant Bangles', price: '₹1500', emoji: '🌹',
        desc: 'Elephant bangles crafted for a both hands, featuring intricate patterns and sophisticated styling.', image: 'images/elephant_bangles(4).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Turquoise blue and pink  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Pattern color customization available']
      },
      {
        name: 'Lotus Bangles', price: '₹950', emoji: '🌹',
        desc: 'Lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lotus_bangles(6).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Red and gold  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: 'Elephant Bangles', price: '₹950', emoji: '🌹',
        desc: 'Elephant bangles crafted for a both hands, featuring intricate patterns and sophisticated styling.', image: 'images/elephant_bangles(5).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Turquoise blue and pink  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Pattern color customization available']
      },
      {
        name: 'Elephant Bangles', price: '₹950', emoji: '🌹',
        desc: 'Elephant bangles crafted for a both hands, featuring intricate patterns and sophisticated styling.', image: 'images/elephant_bangles(6).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Cream white and pink  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Pattern color customization available']
      },
      {
        name: 'Lotus Bangles', price: '₹950', emoji: '🌹',
        desc: 'Lotus bangles crafted for a both hands, featuring intricate petals and sophisticated styling.', image: 'images/lotus_bangles(7).png',
        features: ['No. of Bangles: both hands piece', 'Sizes & Colours: Purple and gold  . Sizes 2.2 to 2.8.', 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },

    ]
  },
  {
    id: 'glass_bangles',
    key: 'cat_glass_bangles',
    emoji: '🔮',
    image: 'images/glass_bangles.png',
    gradient: 'linear-gradient(135deg, #A47148, #5C1A1B)',
    desc: 'Vibrant and elegant glass bangles that capture light beautifully.',
    products: []
  },
  {
    id: 'hair',
    key: 'cat_hair',
    emoji: '🌺',
    gradient: 'linear-gradient(135deg, #A47148, #2A2A2A)',
    image: 'images/hair.png',
    desc: 'Elegant hair accessories to add charm.',
    products: []
  },
  {
    id: 'earrings',
    key: 'cat_earrings',
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #5C1A1B, #2A2A2A)',
    image: 'images/jhumka_earrings.png',
    desc: 'Stunning earrings from subtle studs to statement jhumkas.',
    products: [
       {
        name: ' Handmade Jhumka earrings', price: '₹150', emoji: '🦜',
        desc: 'Handmade jhumka earrings, featuring intricate parrot and sophisticated styling.', image: 'images/jhumka_earrings.png',
        features: [ 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: ' Handmade Jhumka earrings', price: '₹150', emoji: '🦜',
        desc: 'Handmade jhumka earrings, featuring intricate parrot and sophisticated styling.', image: 'images/jhumka_earrings(1).png',
        features: [ 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: ' Handmade Jhumka earrings', price: '₹150', emoji: '🦜',
        desc: 'Handmade jhumka earrings, featuring intricate parrot and sophisticated styling.', image: 'images/jhumka_earrings(2).png',
        features: [ 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: ' Handmade Jhumka earrings', price: '₹180', emoji: '🦜',
        desc: 'Handmade jhumka earrings, featuring intricate parrot and sophisticated styling.', image: 'images/jhumka_earrings(3).png',
        features: [ 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      },
      {
        name: ' Handmade Jhumka earrings', price: '₹180', emoji: '🦜',
        desc: 'Handmade jhumka earrings, featuring intricate parrot and sophisticated styling.', image: 'images/jhumka_earrings(4).png',
        features: [ 'Dispatch Timeline: 2-5 days', 'Customization: Petal color customization available']
      }

    ]
  },
  {
    id: 'pins',
    key: 'cat_pins',
    emoji: '📌',
    gradient: 'linear-gradient(135deg, #A47148, #5C1A1B)',
    image: 'images/pins.png',
    desc: 'Decorative saree pins.',
    products: []
  },
  {
    id: 'necksets',
    key: 'cat_necksets',
    emoji: '📿',
    gradient: 'linear-gradient(135deg, #D4AF37, #5C1A1B)',
    image: 'images/parrot_set.png',
    desc: 'Complete neck sets.',
    products: [
      {
        name: ' Lotus Set', price: '₹400', emoji: '🦜',
        desc: 'Handmade lotus neckset with trending invisible chain, featuring intricate lotus and sophisticated styling.', image: 'images/lotus_set.png',
        features: [ 'Dispatch Timeline: 2-5 days','Colours: Red and gold', 'Customization: Petal color customization available']
      },
      {
        name: ' Lotus Set', price: '₹400', emoji: '🦜',
        desc: 'Handmade lotus neckset with trending invisible chain, featuring intricate lotus and sophisticated styling.', image: 'images/lotus_set-1.png',
        features: [ 'Dispatch Timeline: 2-5 days','Colours: Purple and gold', 'Customization: Petal color customization available']
      },
      {
        name: ' Elephant Set', price: '₹400', emoji: '🦜',
        desc: 'Handmade elephant neckset with trending invisible chain, featuring intricate elephant and sophisticated styling.', image: 'images/elephant_set.png',
        features: [ 'Dispatch Timeline: 2-5 days','Colours: Pink and cream', 'Customization: Petal color customization available']
      },
      {
        name: ' Peacock Set', price: '₹350', emoji: '🦜',
        desc: 'Handmade peacock neckset with trending invisible chain, featuring intricate peacock and sophisticated styling.', image: 'images/peacock_set.png',
        features: [ 'Dispatch Timeline: 2-5 days','Colours: Black and gold', 'Customization: Petal color customization available']
      },
      {
        name: ' Parrot Set', price: '₹450', emoji: '🦜',
        desc: 'Handmade parrot neckset with trending invisible chain, featuring intricate parrot and sophisticated styling.', image: 'images/parrot_set.png',
        features: [ 'Dispatch Timeline: 2-5 days','Colours: Multi colour', 'Customization: Petal color customization available']
      },
    ]
  },
  {
    id: 'gifts',
    key: 'cat_gifts',
    emoji: '🎁',
    gradient: 'linear-gradient(135deg, #5C1A1B, #A47148)',
    image: 'images/gifts.png',
    desc: 'Thoughtful return gifts.',
    products: []
  }
];

categories.forEach((cat, cIdx) => {
  cat.products.forEach((p, pIdx) => {
    p.rawPrice = parseInt(p.price.replace(/\D/g, '')) || 0;

    const str = (p.name + ' ' + (p.image || '')).toLowerCase();
    if (str.includes('stone') || (str.includes('flower') && cat.id === 'bangles')) p.color = 'Pink & Green';
    else if (str.includes('raindrop') || str.includes('pearl')) p.color = 'Gold & Pearl';
    else if (str.includes('green') || str.includes('meenakari')) p.color = 'Green & Gold';
    else if (str.includes('silver') || str.includes('crystal')) p.color = 'Silver & Clear';
    else if (str.includes('pink') || str.includes('rose') || str.includes('floral')) p.color = 'Pink';
    else if (str.includes('tassel') || str.includes('scrunchie')) p.color = 'Multicolor';
    else p.color = 'Gold';

    if (cat.id === 'bangles') {
      p.sizes = ['2.2', '2.4', '2.6', '2.8'];
    } else {
      p.sizes = ['Free Size'];
    }
  });
});

let activeFilters = { color: 'All', size: 'All', sort: 'default' };
let filtersExpanded = false;
function updateFilters(key, value) {
  activeFilters[key] = value;
  renderPage();
}
function toggleFilters() {
  filtersExpanded = !filtersExpanded;
  renderPage();
}
function resetFilters() {
  activeFilters = { color: 'All', size: 'All', sort: 'default' };
  filtersExpanded = false;
}

let cart = [];
let wishlist = [];

function updateBadges() {
  const cartBadge = document.getElementById('cart-badge');
  const wishlistBadge = document.getElementById('wishlist-badge');
  if (cartBadge) cartBadge.innerText = cart.reduce((acc, item) => acc + item.qty, 0);
  if (wishlistBadge) wishlistBadge.innerText = wishlist.length;
}

function findProductImage(productName) {
  for (const cat of categories) {
    const product = cat.products.find(item => item.name === productName);
    if (product && product.image) {
      return product.image;
    }
  }
  return '';
}

function getStoreLink() {
  return 'https://d-creations-website.netlify.app/';
}

function getProductLink(productName) {
  for (const cat of categories) {
    const productIndex = cat.products.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
      return `${getStoreLink()}#${cat.id}/${productIndex}`;
    }
  }
  return getStoreLink();
}

function addToCart(productName, priceStr, size = 'Default', qty = 1) {
  const price = parseInt(priceStr.replace(/[^0-9]/g, ''));
  const existing = cart.find(i => i.name === productName && i.size === size);
  const image = findProductImage(productName);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ name: productName, price, size, qty, image });
  }
  updateBadges();
  alert(`${productName} added to cart!`);
}

function updateCartQty(index, amt) {
  if (cart[index]) {
    cart[index].qty += amt;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    updateBadges();
    renderPage();
  }
}

function toggleWishlist(productName) {
  const idx = wishlist.indexOf(productName);
  if (idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(productName);
  }
  updateBadges();
  renderPage();
}

function checkoutCart() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let total = 0;
  let text = "Hi! I would like to order the following items:\n\n";

  cart.forEach((item, i) => {
    const itemTotal = item.price * item.qty;
    const productLink = getProductLink(item.name);
    total += itemTotal;
    text += `${i + 1}. ${item.name} - Size: ${item.size} - Qty: ${item.qty} - ₹${itemTotal}\nProduct: ${productLink}\n\n`;
  });

  text += `Order Total: ₹${total}\n\nPlease confirm stock and delivery for these items.`;

  const whatsappUrl = `https://wa.me/918309870431?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
}

function addPdpToCart(name, priceStr) {
  const sizeSelect = document.getElementById('pdp-size-select');
  const size = (sizeSelect && sizeSelect.value !== 'Not Selected') ? sizeSelect.value : 'Default';
  const qtyInput = document.getElementById('qty-input');
  const qty = qtyInput ? parseInt(qtyInput.value) : 1;
  addToCart(name, priceStr, size, qty);
}

let currentPage = 'home';
let currentProduct = null;
function navigateTo(page, productIndex = null) {
  if (currentPage !== page && productIndex === null) resetFilters();
  currentPage = page;
  currentProduct = productIndex;

  if (page === 'home') {
    window.location.hash = 'home';
  } else if (productIndex !== null && productIndex >= 0) {
    window.location.hash = `${page}/${productIndex}`;
  } else {
    window.location.hash = page;
  }

  renderPage();
  window.scrollTo(0, 0);
}

function applyHashRoute() {
  const hash = (window.location.hash || '').replace('#', '').trim();
  if (!hash || hash === 'home') {
    currentPage = 'home';
    currentProduct = null;
    return;
  }

  const [page, productIndex] = hash.split('/');
  const targetCategory = categories.find(cat => cat.id === page);
  if (targetCategory) {
    currentPage = page;
    currentProduct = productIndex !== undefined ? Number(productIndex) : null;
    if (currentProduct !== null && (currentProduct < 0 || currentProduct >= targetCategory.products.length)) {
      currentProduct = null;
    }
    return;
  }

  currentPage = 'home';
  currentProduct = null;
}

function toggleMobile() { document.querySelector('#mobile-menu').style.display = document.querySelector('#mobile-menu').style.display === 'block' ? 'none' : 'block'; }
function closeMobile() { document.querySelector('#mobile-menu').style.display = 'none'; }
function getCatName(key) { return (window.elementSdk?.config && window.elementSdk.config[key]) || defaultConfig[key] || key; }

function renderProductCardHTML(p, cat, isAvailable) {
  const inWishlist = wishlist.includes(p.name);
  return `
    <div class="product-card" onclick="${isAvailable ? `navigateTo('${cat.id}', ${cat.products.indexOf(p)})` : ''}" style="${!isAvailable ? 'opacity: 0.8; cursor: not-allowed;' : ''}">
      <button class="wishlist-btn-float" style="color:${inWishlist ? '#D4AF37' : '#999'}" onclick="event.stopPropagation(); toggleWishlist('${p.name}')">
        <i data-lucide="heart" style="width:16px;height:16px; ${inWishlist ? 'fill: #D4AF37;' : ''}"></i>
      </button>
      <div class="p-image-wrapper">
        ${p.image ? `<img src="${p.image}" class="p-image-blur"><img src="${p.image}" alt="${p.name}" class="p-image">` : `<div style="font-size:48px; position:relative; z-index:2;">${p.emoji}</div>`}
        ${!isAvailable ? `<div style="position:absolute; top:12px; left:12px; background:rgba(255,0,0,0.85); color:white; padding:4px 8px; border-radius:4px; font-size:10px; font-weight:bold; z-index:10; letter-spacing: 0.5px;">Out of Stock</div>` : ''}
      </div>
      <div class="p-details">
        <h4 class="p-name">${p.name}</h4>
        <div style="display:flex; flex-direction:column; gap:8px; margin-top: auto; padding-top: 12px;">
           <span class="p-price" style="margin-top:0; color:#D4AF37; font-size: 16px; font-weight: 700;">${p.price}</span>
           <button style="width: 100%; background:#D4AF37; color:#1c110e; border:none; padding:10px 16px; font-weight:700; font-size:12px; cursor:pointer; text-transform:uppercase; transition: background 0.3s;" onmouseover="this.style.background='#F5F5F5'" onmouseout="this.style.background='#D4AF37'" onclick="event.stopPropagation(); addToCart('${p.name}', '${p.price}', 'Default', 1)">ADD TO CART</button>
        </div>
      </div>
    </div>
  `;
}

function renderPage() {
  const content = document.getElementById('content');
  if (!content) return;

  if (window.carouselIntervals) {
    window.carouselIntervals.forEach(clearInterval);
  }

  if (currentPage === 'home') {
    let homeHTML = `
      <section class="hero-presentation">
        <img src="images/d-creations.png" alt="D Creations Logo">
      </section>
      
      <section class="category-highlights">
        <div class="cat-circle-row">
          <div class="cat-circle-item" onclick="navigateTo('home')">
            <div class="cat-circle">
              <span style="font-size:18px;font-weight:bold;color:#666;">ALL</span>
            </div>
            <span class="cat-circle-title">All</span>
          </div>
          ${categories.map(cat => `
            <div class="cat-circle-item" onclick="navigateTo('${cat.id}')">
              <div class="cat-circle" style="background: ${cat.image ? 'transparent' : cat.gradient}; padding: ${cat.image ? '0' : ''}">
                 ${cat.image ? `<img src="${cat.image}" alt="${getCatName(cat.key)}">` : cat.emoji}
              </div>
              <span class="cat-circle-title">${getCatName(cat.key)}</span>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    // Split sections for each category
    categories.forEach(cat => {
      let topProducts = cat.products.slice(0, 8);
      if (topProducts.length === 0) return;

      let marqueeItems = [...topProducts, ...topProducts]; // duplicate for seamless loop

      homeHTML += `
        <section class="home-split-section">
          <div class="split-left">
            <h2 class="font-heading">${getCatName(cat.key)}</h2>
            <p>${cat.desc}</p>
            <button class="view-all-btn" onclick="navigateTo('${cat.id}')">Shop All <i data-lucide="arrow-right" style="width:16px;height:16px;"></i></button>
          </div>
          <div class="split-right" style="overflow: hidden; max-width: 100%;">
            <div class="marquee-wrapper">
              <div class="marquee-track">
                ${marqueeItems.map(p => {
        const isAvailable = true;
        return renderProductCardHTML(p, cat, isAvailable);
      }).join('')}
              </div>
            </div>
          </div>
        </section>
      `;
    });

    content.innerHTML = homeHTML;

    // Carousel logic: step by step every 2 seconds
    if (window.carouselIntervals) {
      window.carouselIntervals.forEach(clearInterval);
    }
    window.carouselIntervals = [];
    document.querySelectorAll('.marquee-wrapper').forEach(wrapper => {
      let interval = setInterval(() => {
        let firstCard = wrapper.querySelector('.product-card');
        if (!firstCard) return;
        let cardWidth = firstCard.offsetWidth + 24; // width + gap
        if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 10) {
          wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          wrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }, 2000);
      window.carouselIntervals.push(interval);
    });

  } else if (currentPage === 'cart') {
    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    content.innerHTML = `
      <div style="max-width: 800px; margin: 60px auto; padding: 0 16px; min-height: 50vh;">
        <h1 class="font-heading" style="font-size:32px; border-bottom:1px solid rgba(212,175,55,0.3); padding-bottom:16px; margin-bottom:24px; color:#D4AF37;">Shopping Cart</h1>
        ${cart.length === 0 ? '<p style="text-align:center; color:#C4A484; padding:40px;">Your cart is empty.</p>' : `
          <div class="cart-items">
            ${cart.map((item, index) => {
      let pImage = null;
      let pEmoji = '💎';
      for (const c of categories) {
        const found = c.products.find(prod => prod.name === item.name);
        if (found) {
          pImage = found.image;
          pEmoji = found.emoji || '💎';
          break;
        }
      }
      return `
              <div style="display:flex; align-items:center; justify-content:space-between; padding:16px 0; border-bottom:1px solid rgba(212,175,55,0.2);">
                <div style="display:flex; align-items:center; gap:16px; flex:1;">
                  <div style="width: 64px; height: 64px; border-radius: 8px; background: #1c110e; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid rgba(212,175,55,0.3); flex-shrink: 0;">
                    ${pImage ? `<img src="${pImage}" style="width: 100%; height: 100%; object-fit: contain;">` : `<span style="font-size:24px;">${pEmoji}</span>`}
                  </div>
                  <div>
                    <h4 style="margin:0 0 8px; font-size:16px; color:#F5F5F5;">${item.name}</h4>
                    <p style="margin:0; font-size:13px; color:#C4A484;">Size: ${item.size} | ₹${item.price}</p>
                  </div>
                </div>
                <div class="qty-selector" style="display:flex; align-items:center; border:1px solid rgba(212,175,55,0.3); margin-right: 24px;">
                  <button class="qty-btn" style="padding:4px 12px; border:none; background:transparent; cursor:pointer; color:#F5F5F5;" onclick="updateCartQty(${index}, -1)">-</button>
                  <span style="padding:4px 12px; font-weight:700; color:#D4AF37;">${item.qty}</span>
                  <button class="qty-btn" style="padding:4px 12px; border:none; background:transparent; cursor:pointer; color:#F5F5F5;" onclick="updateCartQty(${index}, 1)">+</button>
                </div>
                <div style="font-weight:700; min-width:80px; text-align:right; color:#D4AF37;">
                  ₹${item.price * item.qty}
                </div>
              </div>
            `}).join('')}
          </div>
          <div style="text-align:right; margin-top:24px;">
             <p style="font-size:20px; font-weight:700; margin-bottom:16px; color:#F5F5F5;">Total: <span style="color:#D4AF37;">₹${total}</span></p>
             <button onclick="checkoutCart()" style="background:#25D366; color:#1c110e; border:none; padding:14px 24px; font-weight:700; font-size:14px; cursor:pointer; display:inline-flex; align-items:center; gap:8px; border-radius: 4px;">
               <i data-lucide="message-circle" style="width:18px;height:18px;"></i> CHECKOUT VIA WHATSAPP
             </button>
          </div>
        `}
      </div>
    `;
  } else if (currentPage === 'wishlist') {
    let savedProducts = [];
    categories.forEach(c => {
      c.products.forEach(p => {
        if (wishlist.includes(p.name)) savedProducts.push({ p, cat: c });
      });
    });
    content.innerHTML = `
      <div style="max-width: 1200px; margin: 60px auto; padding: 0 16px; min-height: 50vh;">
        <h1 class="font-heading" style="font-size:32px; border-bottom:1px solid rgba(212,175,55,0.3); padding-bottom:16px; margin-bottom:24px; color:#D4AF37;">My Wishlist</h1>
        ${savedProducts.length === 0 ? '<p style="text-align:center; color:#C4A484; padding:40px;">Your wishlist is empty.</p>' : `
          <div class="grid">
            ${savedProducts.map(item => renderProductCardHTML(item.p, item.cat, true)).join('')}
          </div>
        `}
      </div>
      `;
  } else if (currentPage === 'signin') {
    content.innerHTML = `
      <div style="max-width: 400px; margin: 80px auto; padding: 40px; background: #2b1b16; border: 1px solid rgba(212,175,55,0.3); text-align: center; border-radius: 8px;">
        <img src="images/d-creations.png" alt="D Creations" style="height: 60px; margin-bottom: 24px; object-fit: contain;">
        <h1 class="font-heading" style="font-size:28px; margin-bottom:8px; color:#F5F5F5;">Welcome Back</h1>
        <p style="color:#C4A484; font-size:14px; margin-bottom:32px;">Please sign in to your account</p>
        
        <form onsubmit="event.preventDefault(); alert('Sign in functionality will be integrated with the backend soon. For now, enjoy exploring!'); navigateTo('home');" style="text-align: left;">
          <div style="margin-bottom: 16px;">
            <label style="display:block; font-size:12px; font-weight:700; color:#D4AF37; margin-bottom:8px; text-transform:uppercase;">Email Address</label>
            <input type="email" required placeholder="Enter your email" style="width: 100%; padding: 12px; border: 1px solid rgba(212,175,55,0.3); font-family: 'Nunito', sans-serif; outline: none; background: #1c110e; color: #F5F5F5;">
          </div>
          <div style="margin-bottom: 24px;">
            <label style="display:block; font-size:12px; font-weight:700; color:#D4AF37; margin-bottom:8px; text-transform:uppercase;">Password</label>
            <input type="password" required placeholder="Enter your password" style="width: 100%; padding: 12px; border: 1px solid rgba(212,175,55,0.3); font-family: 'Nunito', sans-serif; outline: none; background: #1c110e; color: #F5F5F5;">
          </div>
          <button type="submit" style="width: 100%; background: #D4AF37; color: #1c110e; border: none; padding: 14px; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: background 0.3s; letter-spacing: 1px; border-radius: 4px;" onmouseover="this.style.background='#F5F5F5'" onmouseout="this.style.background='#D4AF37'">Sign In</button>
        </form>
        <p style="margin-top: 24px; font-size:14px; color:#C4A484;">Don't have an account? <a href="#" onclick="alert('Account creation coming soon!'); return false;" style="color:#D4AF37; font-weight:700; text-decoration:underline;">Create one</a></p>
      </div>
      `;
  } else {
    // CATEGORY OR PDP
    const cat = categories.find(c => c.id === currentPage);
    if (cat) {
      if (currentProduct !== null && currentProduct >= 0 && currentProduct < cat.products.length) {
        // PDP
        const p = cat.products[currentProduct];
        const relProducts = cat.products.filter((_, i) => i !== currentProduct).slice(0, 4);
        content.innerHTML = `
          <div class="pdp-wrapper">
            <p class="pdp-breadcrumb" style="margin-bottom: 24px; color: #666; font-size: 14px; max-width: 1200px; margin: 0 auto 24px;">
              <a href="#" style="text-decoration: none; color: inherit;" onclick="navigateTo('home'); return false;">Home</a> / 
              <a href="#" style="text-decoration: none; color: inherit;" onclick="navigateTo('${cat.id}'); return false;">${getCatName(cat.key)}</a> / 
              <span style="color:#000; font-weight:600;">${p.name}</span>
            </p>
            <div class="pdp-container">
              <div class="pdp-image-view">
                ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<div style="font-size:120px;height:400px;display:flex;align-items:center;justify-content:center;">${p.emoji}</div>`}
              </div>
              <div class="pdp-info-view">
                <h1 class="font-heading pdp-title">${p.name}</h1>
                <p class="pdp-price">${p.price}</p>
                
                <p style="margin: 16px 0; font-size: 15px; line-height: 1.6; color: #999;">${p.desc || ''}</p>

                <ul class="pdp-features">
                  ${p.features && p.features.length > 0 ? p.features.map(f => {
                    const parts = f.split(':');
                    if(parts.length > 1) {
                        return `<li><strong>${parts[0]}:</strong>${parts.slice(1).join(':')}</li>`;
                    }
                    return `<li>${f}</li>`;
                  }).join('') : `
                  <li><strong>No. of ${getCatName(cat.key)}:</strong> ${cat.id === 'bangles' ? 'for one hand or two hands as per your requirement' : '1 Set'}</li>
                  <li><strong>Sizes & Colours:</strong> All sizes upto 2.8 are available & Colour can be customized</li>
                  <li><strong>Dispatch Timeline:</strong> 2-5 days</li>
                  <li><strong>Customization:</strong> click buy now for customization</li>
                  `}
                </ul>
                <p style="margin:24px 0; font-size:14px; color:#999; line-height:1.6;">
                  <strong>Note:</strong> COD not available. Return and exchange not available.
                </p>

                <div style="margin-bottom:24px;">
                   <label style="display:block; font-weight:700; margin-bottom:8px; color:#D4AF37; text-transform:uppercase; font-size:12px;">Size</label>
                   <select id="pdp-size-select" style="width:100%; max-width:300px; padding:12px; border: 1px solid #EAEAEA; border-radius:0; outline:none; font-family:'Nunito', sans-serif;">
                     <option value="Not Selected" disabled selected>Choose an option</option>
                     ${p.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
                   </select>
                </div>

                <div style="display:flex; align-items:stretch; gap:16px; flex-wrap:wrap;">
                   <div class="qty-selector">
                    <button class="qty-btn" onclick="updateQuantity(-1); return false;">-</button>
                    <input id="qty-input" type="text" value="1" readonly />
                    <button class="qty-btn" onclick="updateQuantity(1); return false;">+</button>
                  </div>
                  <button class="pdp-btn-buy" onclick="addPdpToCart('${p.name}', '${p.price}')">ADD TO CART</button>
                </div>

                <div style="display:flex; align-items:center; gap:24px; margin-top:32px;">
                  <button onclick="toggleWishlist('${p.name}')" style="display:flex; align-items:center; gap:6px; color:#666; text-decoration:none; background:none; border:none; cursor:pointer; padding:0; font-size:16px;">
                    <i data-lucide="heart" style="width:18px;height:18px; ${wishlist.includes(p.name) ? 'fill:#D4AF37;color:#D4AF37;' : ''}"></i> Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style="max-width: 1200px; margin: 60px auto; padding: 0 16px;">
            <h3 class="font-heading" style="font-size:24px; border-bottom:1px solid #EAEAEA; padding-bottom:16px; margin-bottom:24px;">Similar Products</h3>
            <div class="grid">
              ${relProducts.map((rp) => {
          const isAvailable = true;
          return renderProductCardHTML(rp, cat, isAvailable);
        }).join('')}
            </div>
          </div>
        `;
      } else {
        // CATEGORY PAGE (LISTING)
        if (cat.products.length === 0) {
          content.innerHTML = `
              <div class="category-page-header">
                 <h1 class="font-heading">${getCatName(cat.key)}</h1>
                 <p style="color:#C4A484; margin-top:8px;">${cat.desc}</p>
              </div>
              <div style="max-width: 1200px; margin: 60px auto; padding: 0 16px; text-align: center; min-height: 40vh;">
                <h2 style="color: #D4AF37; font-size: 28px; margin-bottom: 16px;">Coming Soon!</h2>
                <p style="color: #C4A484; font-size: 16px;">We are currently crafting beautiful pieces for this collection. Please check back later.</p>
                <button onclick="navigateTo('home')" style="margin-top: 24px; background: #D4AF37; color: #1c110e; border: none; padding: 12px 24px; font-weight: 700; cursor: pointer; text-transform: uppercase; border-radius: 4px; transition: background 0.3s;" onmouseover="this.style.background='#F5F5F5'" onmouseout="this.style.background='#D4AF37'">Back to Home</button>
              </div>
            `;
          if (window.lucide) lucide.createIcons();
          return;
        }

        let filteredProducts = [...cat.products];
        if (activeFilters.color !== 'All') {
          filteredProducts = filteredProducts.filter(p => p.color === activeFilters.color);
        }
        if (activeFilters.size !== 'All') {
          filteredProducts = filteredProducts.filter(p => p.sizes.includes(activeFilters.size));
        }
        if (activeFilters.sort === 'low-high') {
          filteredProducts.sort((a, b) => a.rawPrice - b.rawPrice);
        } else if (activeFilters.sort === 'high-low') {
          filteredProducts.sort((a, b) => b.rawPrice - a.rawPrice);
        }

        const availableColors = ['All', ...new Set(cat.products.map(p => p.color))];
        const allSizes = cat.products.reduce((acc, p) => acc.concat(p.sizes), []);
        const availableSizes = ['All', ...new Set(allSizes)];

        content.innerHTML = `
          <div class="category-page-header">
             <h1 class="font-heading">${getCatName(cat.key)}</h1>
             <p style="color:#666; margin-top:8px;">${cat.desc}</p>
          </div>
          
          <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;">
            <div style="display: flex; justify-content: flex-end; margin-bottom: 16px;">
              <button onclick="toggleFilters()" style="background: transparent; border: 1px solid #000; color: #000; padding: 8px 16px; display: flex; align-items: center; gap: 8px; cursor: pointer; font-weight: 700; text-transform:uppercase; font-size:12px;">
                <i data-lucide="sliders-horizontal" style="width:14px;height:14px;"></i> Filters
              </button>
            </div>

            <div class="filter-bar" style="display: ${filtersExpanded ? 'flex' : 'none'};">
              <div style="display:flex; flex-direction: column; gap: 4px; flex: 1; min-width: 140px;">
                <label style="font-size: 12px; color: #666; font-weight: 700; text-transform:uppercase;">Sort By Price</label>
                <select class="filter-select" onchange="updateFilters('sort', this.value)">
                  <option value="default" ${activeFilters.sort === 'default' ? 'selected' : ''}>Default</option>
                  <option value="low-high" ${activeFilters.sort === 'low-high' ? 'selected' : ''}>Low to High</option>
                  <option value="high-low" ${activeFilters.sort === 'high-low' ? 'selected' : ''}>High to Low</option>
                </select>
              </div>
              
              <div style="display:flex; flex-direction: column; gap: 4px; flex: 1; min-width: 140px;">
                <label style="font-size: 12px; color: #666; font-weight: 700; text-transform:uppercase;">Filter By Color</label>
                <select class="filter-select" onchange="updateFilters('color', this.value)">
                  ${availableColors.map(c => `<option value="${c}" ${activeFilters.color === c ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
              </div>

              <div style="display:flex; flex-direction: column; gap: 4px; flex: 1; min-width: 140px;">
                <label style="font-size: 12px; color: #666; font-weight: 700; text-transform:uppercase;">Filter By Size</label>
                <select class="filter-select" onchange="updateFilters('size', this.value)">
                  ${availableSizes.map(s => `<option value="${s}" ${activeFilters.size === s ? 'selected' : ''}>${s}</option>`).join('')}
                </select>
              </div>
            </div>

            <div class="grid" style="margin-bottom: 60px;">
              ${filteredProducts.length > 0 ? filteredProducts.map((p) => {
          const isAvailable = true;
          return renderProductCardHTML(p, cat, isAvailable);
        }).join('') : '<div style="width: 100%; text-align: center; color: #999; padding: 40px; border: 1px solid #EAEAEA;">No products match your filters.</div>'}
            </div>
          </div>
        `;
      }
    }
  }
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function addEnquiry(productName) {
  const phoneNumber = '917780439164';
  const qtyInput = document.getElementById('qty-input');
  const qty = qtyInput ? qtyInput.value : 1;
  const sizeSelect = document.getElementById('pdp-size-select');
  const sizeText = (sizeSelect && sizeSelect.value && sizeSelect.value !== 'Not Selected') ? ` (Size: ${sizeSelect.value})` : '';
  const message = encodeURIComponent(`Hi! I'm interested in buying ${qty}x ${productName}${sizeText}. Could you please share more details and pricing?`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

function updateQuantity(amt) {
  const qtyInput = document.getElementById('qty-input');
  if (qtyInput) {
    let current = parseInt(qtyInput.value) || 1;
    let next = current + amt;
    if (next < 1) next = 1;
    qtyInput.value = next;
  }
}

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };
  document.body.style.backgroundColor = c.background_color;
  document.getElementById('nav-brand').textContent = c.brand_name;
  document.getElementById('footer-text').textContent = c.footer_text;
  document.body.style.fontSize = c.font_size + 'px';
  document.querySelectorAll('.font-heading').forEach(el => el.style.fontFamily = "'" + c.font_family + "', serif");

  // Custom properties for colors injected
  let styleEl = document.getElementById('dynamic-config-style');
  if (!styleEl) { styleEl = document.createElement('style'); styleEl.id = 'dynamic-config-style'; document.head.appendChild(styleEl); }
  styleEl.textContent = `
    .var-text-color { color: ${c.text_color}; }
    .var-surface-bg { background-color: ${c.surface_color}; }
    .var-primary-bg { background-color: ${c.primary_action_color}; }
    .var-primary-text { color: ${c.primary_action_color}; }
  `;
  renderPage();
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig, onConfigChange: async (config) => { applyConfig(config); },
    mapToCapabilities: (config) => ({
      recolorables: [
        { get: () => config.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
        { get: () => config.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
        { get: () => config.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
        { get: () => config.primary_action_color, set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } }
      ],
      borderables: [],
      fontEditable: { get: () => config.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
      fontSizeable: { get: () => config.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
    }),
    mapToEditPanelValues: (config) => new Map([
      ['brand_name', config.brand_name], ['tagline', config.tagline], ['cat_bangles', config.cat_bangles]
    ])
  });
}
document.addEventListener('DOMContentLoaded', () => {
  applyHashRoute();
  renderPage();
});
window.addEventListener('hashchange', applyHashRoute);
