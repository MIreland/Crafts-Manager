import React from 'react';
import ThreadItem from './ThreadItem';

// Props is unnecessary. We could also move the list of threads to a util file.
const DmcList = (props) => {
	let threads = [
		{ dmc: 3713, color: 'Salmon Very Light', rgb: [ 255, 226, 226 ] },
		{ dmc: 761, color: 'Salmon Light', rgb: [ 255, 201, 201 ] },
		{ dmc: 760, color: 'Salmon', rgb: [ 245, 173, 173 ] },
		{ dmc: 3712, color: 'Salmon Medium', rgb: [ 241, 135, 135 ] },
		{ dmc: 3328, color: 'Salmon Dark', rgb: [ 227, 109, 109 ] },
		{ dmc: 347, color: 'Salmon Very Dark', rgb: [ 191, 45, 45 ] },
		{ dmc: 353, color: 'Peach', rgb: [ 248, 121, 82, 0.74 ] },
		{ dmc: 352, color: 'Coral Light', rgb: [ 253, 156, 151 ] },
		{ dmc: 351, color: 'Coral', rgb: [ 233, 106, 103 ] },
		{ dmc: 350, color: 'Coral Medium', rgb: [ 224, 72, 72 ] },
		{ dmc: 349, color: 'Coral Dark', rgb: [ 210, 16, 53 ] },
		{ dmc: 817, color: 'Coral Red Very Dark', rgb: [ 187, 5, 31 ] },
		{ dmc: 3708, color: 'Melon Light', rgb: [ 255, 203, 213 ] },
		{ dmc: 3706, color: 'Melon Medium', rgb: [ 255, 173, 188 ] },
		{ dmc: 3705, color: 'Melon Dark', rgb: [ 255, 121, 146 ] },
		{ dmc: 3801, color: 'Melon Very Dark', rgb: [ 231, 73, 103 ] },
		{ dmc: 666, color: 'Bright Red', rgb: [ 227, 29, 66 ] },
		{ dmc: 321, color: 'Red', rgb: [ 199, 43, 59 ] },
		{ dmc: 304, color: 'Red Medium', rgb: [ 183, 31, 51 ] },
		{ dmc: 498, color: 'Red Dark', rgb: [ 167, 19, 43 ] },
		{ dmc: 816, color: 'color:Garnet', rgb: [ 151, 11, 35 ] },
		{ dmc: 815, color: 'color:Garnet Medium', rgb: [ 135, 7, 31 ] },
		{ dmc: 814, color: 'Garnet Dark', rgb: [ 123, 0, 27 ] },
		{ dmc: 894, color: 'Carnation Very Light', rgb: [ 255, 178, 187 ] },
		{ dmc: 893, color: 'Carnation Light', rgb: [ 252, 144, 162 ] },
		{ dmc: 892, color: 'Carnation Medium', rgb: [ 255, 121, 140 ] },
		{ dmc: 891, color: 'Carnation Dark', rgb: [ 255, 87, 115 ] },
		{ dmc: 818, color: 'Baby Pink', rgb: [ 255, 223, 217 ] },
		{ dmc: 957, color: 'Geranium Pale', rgb: [ 253, 181, 181 ] },
		{ dmc: 956, color: 'Geranium', rgb: [ 255, 145, 145 ] },
		{ dmc: 963, color: 'Dusty Rose Ult Vy Lt', rgb: [ 255, 215, 215 ] },
		{ dmc: 3716, color: 'Dusty Rose Med Vy Lt', rgb: [ 255, 189, 189 ] },
		{ dmc: 962, color: 'Dusty Rose Medium', rgb: [ 230, 138, 138 ] },
		{ dmc: 961, color: 'Dusty Rose Dark', rgb: [ 207, 115, 115 ] },
		{ dmc: 3833, color: 'Raspberry Light', rgb: [ 234, 134, 153 ] },
		{ dmc: 3832, color: 'Raspberry Medium', rgb: [ 219, 85, 110 ] },
		{ dmc: 3831, color: 'Raspberry Dark', rgb: [ 179, 47, 72 ] },
		{ dmc: 777, color: 'Raspberry Very Dark', rgb: [ 145, 53, 70 ] },
		{ dmc: 819, color: 'Baby Pink Light', rgb: [ 255, 238, 235 ] },
		{ dmc: 3326, color: 'Rose Light', rgb: [ 251, 173, 180 ] },
		{ dmc: 776, color: 'Pink Medium', rgb: [ 252, 176, 185 ] },
		{ dmc: 899, color: 'Rose Medium', rgb: [ 242, 118, 136 ] },
		{ dmc: 335, color: 'Rose', rgb: [ 238, 84, 110 ] },
		{ dmc: 326, color: 'Rose Very Dark', rgb: [ 179, 59, 75 ] },
		{ dmc: 151, color: 'Dusty Rose Vry Lt', rgb: [ 240, 206, 212 ] },
		{ dmc: 3354, color: 'Dusty Rose Light', rgb: [ 228, 166, 172 ] },
		{ dmc: 3733, color: 'Dusty Rose', rgb: [ 232, 135, 155 ] },
		{ dmc: 3731, color: 'Dusty Rose Very Dark', rgb: [ 218, 103, 131 ] },
		{ dmc: 3350, color: 'Dusty Rose Ultra Dark', rgb: [ 188, 67, 101 ] },
		{ dmc: 150, color: 'Dusty Rose Ult Vy Dk', rgb: [ 171, 2, 73 ] },
		{ dmc: 3689, color: 'Mauve Light', rgb: [ 251, 191, 194 ] },
		{ dmc: 3688, color: 'Mauve Medium', rgb: [ 231, 169, 172 ] },
		{ dmc: 3687, color: 'Mauve', rgb: [ 201, 107, 112 ] },
		{ dmc: 3803, color: 'Mauve Dark', rgb: [ 171, 51, 87 ] },
		{ dmc: 3685, color: 'Mauve Very Dark', rgb: [ 136, 21, 49 ] },
		{ dmc: 605, color: 'Cranberry Very Light', rgb: [ 255, 192, 205 ] },
		{ dmc: 604, color: 'Cranberry Light', rgb: [ 255, 176, 190 ] },
		{ dmc: 603, color: 'Cranberry', rgb: [ 228, 5, 72, 0.3 ] },
		{ dmc: 602, color: 'Cranberry Medium', rgb: [ 228, 5, 72, 0.5 ] },
		{ dmc: 601, color: 'Cranberry Dark', rgb: [ 228, 5, 72, 0.7 ] },
		{ dmc: 600, color: 'Cranberry Very Dark', rgb: [ 228, 5, 72, 0.9 ] },
		{ dmc: 3806, color: 'Cyclamen Pink Light', rgb: [ 255, 140, 174 ] },
		{ dmc: 3805, color: 'Cyclamen Pink', rgb: [ 243, 71, 139 ] },
		{ dmc: 3804, color: 'Cyclamen Pink Dark', rgb: [ 224, 40, 118 ] },
		{ dmc: 3609, color: 'Plum Ultra Light', rgb: [ 244, 174, 213 ] },
		{ dmc: 3608, color: 'Plum Very Light', rgb: [ 234, 156, 196 ] },
		{ dmc: 3607, color: 'Plum Light', rgb: [ 197, 73, 137 ] },
		{ dmc: 718, color: 'Plum', rgb: [ 156, 36, 98 ] },

		{ dmc: 917, color: 'Plum Medium', rgb: [ 155, 19, 89 ] },
		{ dmc: 915, color: 'Plum Dark', rgb: [ 130, 0, 67 ] },
		{ dmc: 225, color: 'Shell Pink Ult Vy Lt', rgb: [ 255, 223, 213 ] },
		{ dmc: 224, color: 'Shell Pink Very Light', rgb: [ 226, 160, 153, 0.5 ] },
		{ dmc: 152, color: 'Shell Pink Med Light', rgb: [ 226, 160, 153 ] },
		{ dmc: 223, color: 'Shell Pink Light', rgb: [ 204, 132, 124 ] },
		{ dmc: 3722, color: 'Shell Pink Med', rgb: [ 188, 108, 100 ] },
		{ dmc: 3721, color: 'Shell Pink Dark', rgb: [ 161, 75, 81 ] },
		{ dmc: 221, color: 'Shell Pink Vy Dk', rgb: [ 136, 62, 67 ] },
		{ dmc: 778, color: 'Antique Mauve Vy Lt', rgb: [ 223, 179, 187 ] },
		{ dmc: 3727, color: 'Antique Mauve Light', rgb: [ 219, 169, 178 ] },
		{ dmc: 316, color: 'Antique Mauve Med', rgb: [ 183, 115, 127 ] },
		{ dmc: 3726, color: 'Antique Mauve Dark', rgb: [ 155, 91, 102 ] },
		{ dmc: 315, color: 'Antique Mauve Md Dk', rgb: [ 129, 73, 82 ] },
		{ dmc: 3802, color: 'Antique Mauve Vy Dk', rgb: [ 113, 65, 73 ] },
		{ dmc: 902, color: 'Garnet Very Dark', rgb: [ 130, 38, 55 ] },
		{ dmc: 3743, color: 'Antique Violet Vy Lt', rgb: [ 215, 203, 211 ] },
		{ dmc: 3042, color: 'Antique Violet Light', rgb: [ 183, 157, 167 ] },
		{ dmc: 3041, color: 'Antique Violet Medium', rgb: [ 149, 111, 124 ] },
		{ dmc: 3740, color: 'Antique Violet Dark', rgb: [ 120, 87, 98 ] },
		{ dmc: 3836, color: 'Grape Light', rgb: [ 186, 145, 170 ] },
		{ dmc: 3835, color: 'Grape Medium', rgb: [ 148, 96, 131 ] },
		{ dmc: 3834, color: 'Grape Dark', rgb: [ 114, 55, 93 ] },
		{ dmc: 154, color: 'Grape Very Dark', rgb: [ 87, 36, 51 ] },
		{ dmc: 211, color: 'Lavender Light', rgb: [ 227, 203, 227 ] },
		{ dmc: 210, color: 'Lavender Medium', rgb: [ 195, 159, 195 ] },
		{ dmc: 209, color: 'Lavender Dark', rgb: [ 163, 123, 167 ] },
		{ dmc: 208, color: 'Lavender Very Dark', rgb: [ 131, 91, 139 ] },
		{ dmc: 3837, color: 'Lavender Ultra Dark', rgb: [ 108, 58, 110 ] },
		{ dmc: 327, color: 'Violet Dark', rgb: [ 99, 54, 102 ] },
		{ dmc: 153, color: 'Violet Very Light', rgb: [ 230, 204, 217 ] },
		{ dmc: 554, color: 'Violet Light', rgb: [ 219, 179, 203 ] },
		{ dmc: 553, color: 'Violet', rgb: [ 163, 99, 139 ] },
		{ dmc: 552, color: 'Violet Medium', rgb: [ 128, 58, 107 ] },
		{ dmc: 550, color: 'Violet Very Dark', rgb: [ 92, 24, 78 ] },

		{ dmc: 3747, color: 'Blue Violet Vy Lt', rgb: [ 211, 215, 237 ] },
		{ dmc: 341, color: 'Blue Violet Light', rgb: [ 183, 191, 221 ] },
		{ dmc: 156, color: 'Blue Violet Med Lt', rgb: [ 163, 174, 209 ] },
		{ dmc: 340, color: 'Blue Violet Medium', rgb: [ 173, 167, 199 ] },
		{ dmc: 155, color: 'Blue Violet Med Dark', rgb: [ 152, 145, 182 ] },
		{ dmc: 3746, color: 'Blue Violet Dark', rgb: [ 119, 107, 152 ] },
		{ dmc: 333, color: 'Blue Violet Very Dark', rgb: [ 92, 84, 120 ] },
		{ dmc: 157, color: 'Cornflower Blue Vy Lt', rgb: [ 187, 195, 217 ] },
		{ dmc: 794, color: 'Cornflower Blue Light', rgb: [ 143, 156, 193 ] },
		{ dmc: 793, color: 'Cornflower Blue Med', rgb: [ 112, 125, 162 ] },
		{ dmc: 3807, color: 'Cornflower Blue', rgb: [ 96, 103, 140 ] },
		{ dmc: 792, color: 'Cornflower Blue Dark', rgb: [ 85, 91, 123 ] },
		{ dmc: 158, color: 'Cornflower Blu M V D', rgb: [ 76, 82, 110 ] },
		{ dmc: 791, color: 'Cornflower Blue V D', rgb: [ 70, 69, 99 ] },
		{ dmc: 3840, color: 'Lavender Blue Light', rgb: [ 176, 192, 218 ] },
		{ dmc: 3839, color: 'Lavender Blue Med', rgb: [ 123, 142, 171 ] },
		{ dmc: 3838, color: 'Lavender Blue Dark', rgb: [ 92, 114, 148 ] },
		{ dmc: 800, color: 'Delft Blue Pale', rgb: [ 192, 204, 222 ] },
		{ dmc: 809, color: 'Delft Blue', rgb: [ 148, 168, 198 ] },
		{ dmc: 799, color: 'Delft Blue Medium', rgb: [ 116, 142, 182 ] },
		{ dmc: 98, color: 'Delft Blue Dark', rgb: [ 70, 106, 142 ] },
		{ dmc: 797, color: 'Royal Blue', rgb: [ 19, 71, 125 ] },
		{ dmc: 796, color: 'Royal Blue Dark', rgb: [ 17, 65, 109 ] },
		{ dmc: 820, color: 'Royal Blue Very Dark', rgb: [ 14, 54, 920 ] },
		{ dmc: 162, color: 'Blue Ultra Very Light', rgb: [ 219, 236, 245 ] },
		{ dmc: 827, color: 'Blue Very Light', rgb: [ 189, 221, 237 ] },
		{ dmc: 813, color: 'Blue Light', rgb: [ 161, 194, 215 ] },
		{ dmc: 826, color: 'Blue Medium', rgb: [ 107, 158, 191 ] },
		{ dmc: 825, color: 'Blue Dark', rgb: [ 71, 129, 165 ] },
		{ dmc: 824, color: 'Blue Very Dark', rgb: [ 57, 105, 135 ] },
		{ dmc: 3843, color: 'Electric Blue', rgb: [ 20, 170, 208 ] },
		{ dmc: 995, color: 'Electric Blue Dark', rgb: [ 38, 150, 182 ] },
		{ dmc: 3846, color: 'Turquoise Bright Light', rgb: [ 6, 227, 230 ] },
		{ dmc: 3845, color: 'Turquoise Bright Med', rgb: [ 4, 196, 202 ] },
		{ dmc: 3844, color: 'Turquoise Bright Dark', rgb: [ 18, 174, 186 ] },
		{ dmc: 928, color: 'Gray Green Vy Lt', rgb: [ 221, 227, 227 ] },
		{ dmc: 927, color: 'Gray Green Light', rgb: [ 189, 203, 203 ] },
		{ dmc: 926, color: 'Gray Green Med', rgb: [ 152, 174, 174 ] },
		{ dmc: 3768, color: 'Gray Green Dark', rgb: [ 101, 127, 127 ] },
		{ dmc: 924, color: 'Gray Green Vy Dark', rgb: [ 86, 106, 106 ] },
		{ dmc: 3849, color: 'Teal Green Light', rgb: [ 82, 179, 164 ] },
		{ dmc: 3848, color: 'Teal Green Med', rgb: [ 85, 147, 146 ] },
		{ dmc: 3847, color: 'Teal Green Dark', rgb: [ 52, 125, 117 ] },

		{ dmc: 964, color: 'Sea Green Light', rgb: [ 169, 226, 216 ] },
		{ dmc: 959, color: 'Sea Green Med', rgb: [ 89, 199, 180 ] },
		{ dmc: 958, color: 'Sea Green Dark', rgb: [ 62, 182, 161 ] },
		{ dmc: 3812, color: 'Sea Green Vy Dk', rgb: [ 47, 140, 132 ] },
		{ dmc: 3851, color: 'Green Bright Lt', rgb: [ 73, 179, 161 ] },
		{ dmc: 943, color: 'Green Bright Md', rgb: [ 61, 147, 132 ] },
		{ dmc: 3850, color: 'Green Bright Dk', rgb: [ 55, 132, 119 ] },
		{ dmc: 993, color: 'Aquamarine Vy Lt', rgb: [ 144, 192, 180 ] },
		{ dmc: 992, color: 'Aquamarine Lt', rgb: [ 111, 174, 159 ] },
		{ dmc: 3814, color: 'Aquamarine', rgb: [ 80, 139, 125 ] },
		{ dmc: 991, color: 'Aquamarine Dk', rgb: [ 71, 123, 110 ] },
		{ dmc: 966, color: 'Jade Ultra Vy Lt', rgb: [ 185, 215, 192 ] },
		{ dmc: 564, color: 'Jade Very Light', rgb: [ 167, 205, 175 ] },
		{ dmc: 563, color: 'Jade Light', rgb: [ 143, 192, 152 ] },
		{ dmc: 562, color: 'Jade Medium', rgb: [ 83, 151, 106 ] },
		{ dmc: 505, color: 'Jade Green', rgb: [ 51, 131, 98 ] },
		{ dmc: 3817, color: 'Celadon Green Lt', rgb: [ 153, 195, 170 ] },
		{ dmc: 3816, color: 'Celadon Green', rgb: [ 101, 165, 125 ] },
		{ dmc: 163, color: 'Celadon Green Md', rgb: [ 77, 131, 97 ] },
		{ dmc: 3815, color: 'Celadon Green Dk', rgb: [ 71, 119, 89 ] },
		{ dmc: 561, color: 'Celadon Green VD', rgb: [ 44, 106, 69 ] },
		{ dmc: 504, color: 'Blue Green Vy Lt', rgb: [ 196, 222, 204 ] },
		{ dmc: 3813, color: 'Blue Green Lt', rgb: [ 178, 212, 189 ] },
		{ dmc: 503, color: 'Blue Green Med', rgb: [ 123, 172, 148 ] },
		{ dmc: 502, color: 'Blue Green', rgb: [ 91, 144, 113 ] },
		{ dmc: 501, color: 'Blue Green Dark', rgb: [ 57, 111, 82 ] },
		{ dmc: 955, color: 'Nile Green Light', rgb: [ 162, 214, 173 ] },
		{ dmc: 954, color: 'Nile Green', rgb: [ 136, 186, 145 ] },
		{ dmc: 913, color: 'Nile Green Med', rgb: [ 109, 171, 119, 100 ] },
		{ dmc: 912, color: 'Emerald Green Lt', rgb: [ 27, 157, 107 ] },
		{ dmc: 911, color: 'Emerald Green Med', rgb: [ 24, 144, 101 ] },
		{ dmc: 910, color: 'Emerald Green Dark', rgb: [ 24, 126, 86 ] },
		{ dmc: 909, color: 'Emerald Green Vy Dk', rgb: [ 21, 111, 73 ] },
		{ dmc: 3818, color: 'Emerald Grn Ult V Dk', rgb: [ 17, 90, 59 ] },
		{ dmc: 369, color: 'Pistachio Green Vy Lt', rgb: [ 215, 237, 204 ] },
		{ dmc: 368, color: 'Pistachio Green Lt', rgb: [ 166, 194, 152 ] },
		{ dmc: 320, color: 'Pistachio Green Med', rgb: [ 105, 136, 90 ] },
		{ dmc: 367, color: 'Pistachio Green Dk', rgb: [ 97, 122, 82 ] },
		{ dmc: 319, color: 'Pistachio Grn Vy Dk', rgb: [ 32, 95, 46 ] },
		{ dmc: 890, color: 'Pistachio Grn Ult V D', rgb: [ 23, 73, 35 ] },
		{ dmc: 164, color: 'Forest Green Lt', rgb: [ 200, 216, 184 ] },
		{ dmc: 989, color: 'Forest Green', rgb: [ 141, 166, 117 ] },
		{ dmc: 988, color: 'Forest Green Med', rgb: [ 115, 139, 91 ] },
		{ dmc: 987, color: 'Forest Green Dk', rgb: [ 88, 113, 65 ] },
		{ dmc: 986, color: 'Forest Green Vy Dk', rgb: [ 64, 82, 48 ] },
		{ dmc: 772, color: 'Yellow Green Vy Lt', rgb: [ 228, 236, 212 ] },
		{ dmc: 3348, color: 'Yellow Green Lt', rgb: [ 204, 217, 177 ] },
		{ dmc: 3347, color: 'Yellow Green Med', rgb: [ 113, 147, 92 ] },
		{ dmc: 3346, color: 'Hunter Green', rgb: [ 64, 106, 58 ] },
		{ dmc: 3345, color: 'Hunter Green Dk', rgb: [ 27, 89, 21 ] },
		{ dmc: 895, color: 'Hunter Green Vy Dk', rgb: [ 27, 83, 0 ] },
		{ dmc: 704, color: 'Chartreuse Bright', rgb: [ 158, 207, 52 ] },
		{ dmc: 703, color: 'Chartreuse', rgb: [ 123, 181, 71 ] },
		{ dmc: 702, color: 'Kelly Green', rgb: [ 71, 167, 47 ] },
		{ dmc: 701, color: 'Green Light', rgb: [ 63, 143, 41 ] },
		{ dmc: 700, color: 'Green Bright', rgb: [ 7, 115, 27 ] },
		{ dmc: 699, color: 'Green', rgb: [ 5, 101, 23 ] },
		{ dmc: 907, color: 'Parrot Green Lt', rgb: [ 199, 230, 102 ] },
		{ dmc: 906, color: 'Parrot Green Md', rgb: [ 127, 179, 53 ] },
		{ dmc: 905, color: 'Parrot Green Dk', rgb: [ 98, 138, 40 ] },
		{ dmc: 904, color: 'Parrot Green V Dk', rgb: [ 85, 120, 34 ] },
		{ dmc: 472, color: 'Avocado Grn U Lt', rgb: [ 216, 228, 152 ] },
		{ dmc: 471, color: 'Avocado Grn V Lt', rgb: [ 174, 191, 121 ] },
		{ dmc: 470, color: 'Avocado Grn Lt', rgb: [ 148, 171, 79 ] },
		{ dmc: 469, color: 'Avocado Green', rgb: [ 114, 132, 60 ] },
		{ dmc: 937, color: 'Avocado Green Md', rgb: [ 98, 113, 51 ] },
		{ dmc: 936, color: 'Avocado Grn V Dk', rgb: [ 76, 88, 38 ] },
		{ dmc: 935, color: 'Avocado Green Dk', rgb: [ 66, 77, 33 ] },
		{ dmc: 934, color: 'Avocado Grn Black', rgb: [ 49, 57, 25 ] },
		{ dmc: 523, color: 'Fern Green Lt', rgb: [ 171, 177, 151 ] },

		{ dmc: 3053, color: 'Green Gray', rgb: [ 156, 164, 130 ] },
		{ dmc: 3052, color: 'Green Gray Md', rgb: [ 136, 146, 104 ] },
		{ dmc: 3051, color: 'Green Gray Dk', rgb: [ 95, 102, 72 ] },
		{ dmc: 524, color: 'Fern Green Vy Lt', rgb: [ 196, 205, 172 ] },
		{ dmc: 522, color: 'Fern Green', rgb: [ 150, 158, 126 ] },
		{ dmc: 520, color: 'Fern Green Dark', rgb: [ 102, 109, 79 ] },
		{ dmc: 3364, color: 'Pine Green', rgb: [ 131, 151, 95 ] },
		{ dmc: 3363, color: 'Pine Green Md', rgb: [ 114, 130, 86 ] },
		{ dmc: 3362, color: 'Pine Green Dk', rgb: [ 94, 107, 71 ] },
		{ dmc: 165, color: 'Moss Green Vy Lt', rgb: [ 239, 244, 164 ] },
		{ dmc: 3819, color: 'Moss Green Lt', rgb: [ 224, 232, 104 ] },
		{ dmc: 166, color: 'Moss Green Md Lt', rgb: [ 192, 200, 64 ] },
		{ dmc: 581, color: 'Moss Green', rgb: [ 167, 174, 56 ] },
		{ dmc: 580, color: 'Moss Green Dk', rgb: [ 136, 141, 51 ] },
		{ dmc: 734, color: 'Olive Green Lt', rgb: [ 199, 192, 119 ] },
		{ dmc: 733, color: 'Olive Green Md', rgb: [ 188, 179, 76 ] },
		{ dmc: 732, color: 'Olive Green', rgb: [ 148, 140, 54 ] },
		{ dmc: 731, color: 'Olive Green Dk', rgb: [ 147, 139, 55 ] },
		{ dmc: 730, color: 'Olive Green V Dk', rgb: [ 130, 123, 48 ] },
		{ dmc: 3013, color: 'Khaki Green Lt', rgb: [ 185, 185, 130 ] },
		{ dmc: 3012, color: 'Khaki Green Md', rgb: [ 166, 167, 93 ] },
		{ dmc: 3011, color: 'Khaki Green Dk', rgb: [ 137, 138, 88 ] },

		{ dmc: 372, color: 'Mustard Lt', rgb: [ 204, 183, 132 ] },
		{ dmc: 371, color: 'Mustard', rgb: [ 191, 166, 113 ] },
		{ dmc: 370, color: 'Mustard Medium', rgb: [ 184, 157, 100 ] },
		{ dmc: 834, coflor: 'Golden Olive Vy Lt', rgb: [ 219, 190, 127 ] },
		{ dmc: 833, color: 'Golden Olive Lt', rgb: [ 200, 171, 108 ] },
		{ dmc: 832, color: 'Golden Olive', rgb: [ 189, 155, 81 ] },
		{ dmc: 831, color: 'Golden Olive Md', rgb: [ 170, 143, 86 ] },
		{ dmc: 830, color: 'Golden Olive Dk', rgb: [ 141, 120, 75 ] },
		{ dmc: 829, color: 'Golden Olive Vy Dk', rgb: [ 126, 107, 66 ] },
		{ dmc: 613, color: 'Drab Brown V Lt', rgb: [ 220, 196, 170 ] },
		{ dmc: 612, color: 'Drab Brown Lt', rgb: [ 188, 154, 120 ] },
		{ dmc: 611, color: 'Drab Brown', rgb: [ 150, 118, 86 ] },
		{ dmc: 610, color: 'Drab Brown Dk', rgb: [ 121, 96, 71 ] },
		{ dmc: 3047, color: 'Yellow Beige Lt', rgb: [ 231, 214, 193 ] },
		{ dmc: 3046, color: 'Yellow Beige Md', rgb: [ 216, 188, 154 ] },
		{ dmc: 3045, color: 'Yellow Beige Dk', rgb: [ 188, 150, 106 ] },
		{ dmc: 167, color: 'Yellow Beige V Dk', rgb: [ 167, 124, 73 ] },
		{ dmc: 746, color: 'Off White', rgb: [ 252, 252, 238 ] },
		{ dmc: 677, color: 'Old Gold Vy Lt', rgb: [ 245, 236, 203 ] },
		{ dmc: 422, color: 'Hazelnut Brown Lt', rgb: [ 198, 159, 123 ] },
		{ dmc: 3828, color: 'Hazelnut Brown', rgb: [ 183, 139, 97 ] },
		{ dmc: 420, color: 'Hazelnut Brown Dk', rgb: [ 160, 112, 66 ] },
		{ dmc: 869, color: 'Hazelnut Brown V Dk', rgb: [ 131, 94, 57 ] },
		{ dmc: 728, color: 'Topaz', rgb: [ 228, 180, 104 ] },
		{ dmc: 783, color: 'Topaz Medium', rgb: [ 206, 145, 36 ] },
		{ dmc: 782, color: 'Topaz Dark', rgb: [ 174, 119, 32 ] },
		{ dmc: 781, color: 'Topaz Very Dark', rgb: [ 162, 109, 32 ] },
		{ dmc: 780, color: 'Topaz Ultra Vy Dk', rgb: [ 148, 99, 26 ] },
		{ dmc: 676, color: 'Old Gold Lt', rgb: [ 229, 206, 151 ] },
		{ dmc: 729, color: 'Old Gold Medium', rgb: [ 208, 165, 62 ] },
		{ dmc: 680, color: 'Old Gold Dark', rgb: [ 188, 141, 14 ] },
		{ dmc: 3829, color: 'Old Gold Vy Dark', rgb: [ 169, 130, 4 ] },
		{ dmc: 3822, color: 'Straw Light', rgb: [ 246, 220, 152 ] },
		{ dmc: 3821, color: 'Straw', rgb: [ 243, 206, 117 ] },
		{ dmc: 3820, color: 'Straw Dark', rgb: [ 223, 182, 95 ] },
		{ dmc: 3852, color: 'Straw Very Dark', rgb: [ 205, 157, 55 ] },
		{ dmc: 445, color: 'Lemon Light', rgb: [ 255, 251, 139 ] },
		{ dmc: 307, color: 'Lemon', rgb: [ 253, 237, 84 ] },
		{ dmc: 973, color: 'Canary Bright', rgb: [ 255, 227, 0 ] },
		{ dmc: 444, color: 'Lemon Dark', rgb: [ 255, 214, 0 ] },
		{ dmc: 3078, color: 'Golden Yellow Vy Lt', rgb: [ 253, 249, 205 ] },
		{ dmc: 727, color: 'Topaz Vy Lt', rgb: [ 255, 241, 175 ] },
		{ dmc: 726, color: 'Topaz Light', rgb: [ 253, 215, 85 ] },
		{ dmc: 725, color: 'Topaz Med Lt', rgb: [ 255, 200, 64 ] },
		{ dmc: 972, color: 'Canary Deep', rgb: [ 255, 181, 21 ] },
		{ dmc: 745, color: 'Yellow Pale Light', rgb: [ 255, 233, 173 ] },
		{ dmc: 744, color: 'Yellow Pale', rgb: [ 255, 231, 147 ] },
		{ dmc: 743, color: 'Yellow Med', rgb: [ 254, 211, 118 ] },
		{ dmc: 742, color: 'Tangerine Light', rgb: [ 255, 191, 87 ] },
		{ dmc: 741, color: 'Tangerine Med', rgb: [ 255, 163, 43 ] },
		{ dmc: 740, color: 'Tangerine', rgb: [ 255, 139, 0 ] },
		{ dmc: 970, color: 'Pumpkin Light', rgb: [ 247, 139, 19 ] },
		{ dmc: 971, color: 'Pumpkin', rgb: [ 246, 127, 0 ] },
		{ dmc: 947, color: 'Burnt Orange', rgb: [ 255, 123, 77 ] },
		{ dmc: 946, color: 'Burnt Orange Med', rgb: [ 235, 99, 7 ] },
		{ dmc: 900, color: 'Burnt Orange Dark', rgb: [ 209, 88, 7 ] },
		{ dmc: 967, color: 'Apricot Very Light', rgb: [ 255, 222, 213 ] },
		{ dmc: 3824, color: 'Apricot Light', rgb: [ 254, 205, 194 ] },
		{ dmc: 3341, color: 'Apricot', rgb: [ 252, 171, 152 ] },
		{ dmc: 3340, color: 'Apricot Med', rgb: [ 255, 131, 111 ] },
		{ dmc: 608, color: 'Burnt Orange Bright', rgb: [ 253, 93, 53 ] },
		{ dmc: 606, color: 'Orange‑Red Bright', rgb: [ 250, 50, 3 ] },
		{ dmc: 951, color: 'Tawny Light', rgb: [ 255, 226, 207 ] },
		{ dmc: 3856, color: 'Mahogany Ult Vy Lt', rgb: [ 255, 211, 181 ] },
		{ dmc: 722, color: 'Orange Spice Light', rgb: [ 247, 151, 111 ] },
		{ dmc: 721, color: 'Orange Spice Med', rgb: [ 242, 120, 66 ] },
		{ dmc: 720, color: 'Orange Spice Dark', rgb: [ 229, 92, 31 ] },
		{ dmc: 3825, color: 'Pumpkin Pale', rgb: [ 253, 189, 150 ] },
		{ dmc: 922, color: 'Copper Light', rgb: [ 226, 115, 35 ] },
		{ dmc: 921, color: 'Copper', rgb: [ 198, 98, 24 ] },
		{ dmc: 920, color: 'Copper Med', rgb: [ 172, 84, 20 ] },
		{ dmc: 919, color: 'Red‑Copper', rgb: [ 166, 69, 16 ] },
		{ dmc: 918, color: 'Red‑Copper Dark', rgb: [ 130, 52, 10 ] },
		{ dmc: 3770, color: 'Tawny Vy Light', rgb: [ 255, 238, 227 ] },
		{ dmc: 945, color: 'Tawny', rgb: [ 251, 213, 187 ] },
		{ dmc: 402, color: 'Mahogany Vy Lt', rgb: [ 247, 167, 119 ] },
		{ dmc: 3776, color: 'Mahogany Light', rgb: [ 207, 121, 57 ] },
		{ dmc: 301, color: 'Mahogany Med', rgb: [ 179, 95, 43 ] },
		{ dmc: 400, color: 'Mahogany Dark', rgb: [ 143, 67, 15 ] },
		{ dmc: 300, color: 'Mahogany Vy Dk', rgb: [ 111, 47, 0 ] },
		{ dmc: 3823, color: 'Yellow Ultra Pale', rgb: [ 255, 253, 227 ] },
		{ dmc: 3855, color: 'Autumn Gold Lt', rgb: [ 250, 211, 150 ] },
		{ dmc: 3854, color: 'Autumn Gold Med', rgb: [ 242, 175, 104 ] },
		{ dmc: 3853, color: 'Autumn Gold Dk', rgb: [ 242, 151, 70 ] },
		{ dmc: 3827, color: 'Golden Brown Pale', rgb: [ 247, 187, 119 ] },
		{ dmc: 977, color: 'Golden Brown Light', rgb: [ 220, 156, 86 ] },
		{ dmc: 976, color: 'Golden Brown Med', rgb: [ 194, 129, 66 ] },
		{ dmc: 3826, color: 'Golden Brown', rgb: [ 173, 114, 57 ] },
		{ dmc: 975, color: 'Golden Brown Dk', rgb: [ 145, 79, 18 ] },

		{ dmc: 948, color: 'Peach Very Light', rgb: [ 254, 231, 218 ] },
		{ dmc: 754, color: 'Peach Light', rgb: [ 247, 203, 191 ] },
		{ dmc: 3771, color: 'Terra Cotta Ult Vy Lt', rgb: [ 244, 187, 169 ] },
		{ dmc: 758, color: 'Terra Cotta Vy Lt', rgb: [ 238, 170, 155 ] },
		{ dmc: 3778, color: 'Terra Cotta Light', rgb: [ 217, 137, 120 ] },
		{ dmc: 356, color: 'Terra Cotta Med', rgb: [ 197, 106, 91 ] },
		{ dmc: 3830, color: 'Terra Cotta', rgb: [ 185, 85, 68 ] },
		{ dmc: 355, color: 'Terra Cotta Dark', rgb: [ 152, 68, 54 ] },
		{ dmc: 3777, color: 'Terra Cotta Vy Dk', rgb: [ 134, 8, 34 ] },
		{ dmc: 3779, color: 'Rosewood Ult Vy Lt', rgb: [ 248, 202, 200 ] },
		{ dmc: 3859, color: 'Rosewood Light', rgb: [ 186, 139, 124 ] },
		{ dmc: 3858, color: 'Rosewood Med', rgb: [ 150, 74, 63 ] },
		{ dmc: 3857, color: 'Rosewood Dark', rgb: [ 104, 37, 2 ] },
		{ dmc: 3774, color: 'Desert Sand Vy Lt', rgb: [ 243, 225, 215 ] },
		{ dmc: 950, color: 'Desert Sand Light', rgb: [ 238, 211, 196 ] },
		{ dmc: 3064, color: 'Desert Sand', rgb: [ 196, 142, 112 ] },
		{ dmc: 407, color: 'Desert Sand Med', rgb: [ 187, 129, 97 ] },
		{ dmc: 3773, color: 'Desert Sand Dark', rgb: [ 182, 117, 82 ] },
		{ dmc: 3772, color: 'Desert Sand Vy Dk', rgb: [ 160, 108, 80 ] },
		{ dmc: 632, color: 'Desert Sand Ult Vy Dk', rgb: [ 135, 85, 57 ] },
		{ dmc: 453, color: 'Shell Gray Light', rgb: [ 215, 206, 203 ] },
		{ dmc: 452, color: 'Shell Gray Med', rgb: [ 192, 179, 174 ] },
		{ dmc: 451, color: 'Shell Gray Dark', rgb: [ 145, 123, 115 ] },
		{ dmc: 3861, color: 'Cocoa Light', rgb: [ 166, 136, 129 ] },
		{ dmc: 3860, color: 'Cocoa', rgb: [ 125, 93, 87 ] },
		{ dmc: 779, color: 'Cocoa Dark', rgb: [ 98, 75, 69 ] },
		{ dmc: 712, color: 'Cream', rgb: [ 255, 251, 239 ] },
		{ dmc: 739, color: 'Tan Ult Vy Lt', rgb: [ 248, 228, 200 ] },
		{ dmc: 738, color: 'Tan Very Light', rgb: [ 236, 204, 158 ] },
		{ dmc: 437, color: 'Tan Light', rgb: [ 228, 187, 142 ] },
		{ dmc: 436, color: 'Tan', rgb: [ 203, 144, 81 ] },
		{ dmc: 435, color: 'Brown Very Light', rgb: [ 184, 119, 72 ] },
		{ dmc: 434, color: 'Brown Light', rgb: [ 152, 94, 51 ] },
		{ dmc: 433, color: 'Brown Med', rgb: [ 122, 69, 31 ] },
		{ dmc: 801, color: 'Coffee Brown Dk', rgb: [ 101, 57, 25 ] },
		{ dmc: 898, color: 'Coffee Brown Vy Dk', rgb: [ 73, 42, 19 ] },
		{ dmc: 938, color: 'Coffee Brown Ult Dk', rgb: [ 54, 31, 14 ] },
		{ dmc: 3371, color: 'Black Brown', rgb: [ 30, 17, 8 ] },
		{ dmc: 543, color: 'Beige Brown Ult Vy Lt', rgb: [ 242, 227, 206 ] },
		{ dmc: 3864, color: 'Mocha Beige Light', rgb: [ 203, 182, 156 ] },
		{ dmc: 3863, color: 'Mocha Beige Med', rgb: [ 164, 131, 92 ] },
		{ dmc: 3862, color: 'Mocha Beige Dark', rgb: [ 138, 110, 78 ] },
		{ dmc: 'B5200', color: 'Snow White', rgb: [ 255, 255, 255 ] },
		{ dmc: 'White', color: 'White', rgb: [ 252, 251, 248 ] },
		{ dmc: 3865, color: 'Winter White', rgb: [ 249, 247, 241 ] },
		{ dmc: 'ECRU', color: 'Ecru', rgb: [ 240, 234, 218 ] },

		{ dmc: 822, color: 'Beige Gray Light', rgb: [ 231, 226, 211 ] },
		{ dmc: 644, color: 'Beige Gray Med', rgb: [ 221, 216, 203 ] },
		{ dmc: 642, color: 'Beige Gray Dark', rgb: [ 164, 152, 120 ] },
		{ dmc: 640, color: 'Beige Gray Vy Dk', rgb: [ 133, 123, 97 ] },
		{ dmc: 3787, color: 'Brown Gray Dark', rgb: [ 98, 93, 80 ] },
		{ dmc: 3021, color: 'Brown Gray Vy Dk', rgb: [ 79, 75, 65 ] },
		{ dmc: 3024, color: 'Brown Gray Vy Lt', rgb: [ 235, 234, 21 ] },
		{ dmc: 3023, color: 'Brown Gray Light', rgb: [ 177, 170, 11 ] },
		{ dmc: 3022, color: 'Brown Gray Med', rgb: [ 142, 144, 120 ] },
		{ dmc: 535, color: 'Ash Gray Vy Lt', rgb: [ 99, 100, 88 ] },
		{ dmc: 3033, color: 'Mocha Brown Vy Lt', rgb: [ 179, 160, 139, 0.7 ] },
		{ dmc: 3782, color: 'Mocha Brown Lt', rgb: [ 179, 159, 139, 0.8 ] },
		{ dmc: 3032, color: 'Mocha Brown Med', rgb: [ 179, 159, 139 ] },
		{ dmc: 3790, color: 'Beige Gray Ult Dk', rgb: [ 127, 106, 85 ] },
		{ dmc: 3781, color: 'Mocha Brown Dk', rgb: [ 10, 87, 67 ] },
		{ dmc: 3866, color: 'Mocha Brn Ult Vy Lt', rgb: [ 250, 246, 240 ] },
		{ dmc: 842, color: 'Beige Brown Vy Lt', rgb: [ 209, 186, 161 ] },
		{ dmc: 841, color: 'Beige Brown Lt', rgb: [ 182, 155, 126 ] },
		{ dmc: 840, color: 'Beige Brown Med', rgb: [ 154, 124, 92 ] },
		{ dmc: 839, color: 'Beige Brown Dk', rgb: [ 103, 85, 65 ] },
		{ dmc: 838, color: 'Beige Brown Vy Dk', rgb: [ 89, 73, 55 ] },

		{ dmc: 3072, color: 'Beaver Gray Vy Lt', rgb: [ 230, 232, 232 ] },
		{ dmc: 648, color: 'Beaver Gray Lt', rgb: [ 188, 180, 172 ] },
		{ dmc: 647, color: 'Beaver Gray Med', rgb: [ 176, 166, 156 ] },
		{ dmc: 646, color: 'Beaver Gray Dk', rgb: [ 135, 125, 115 ] },
		{ dmc: 645, color: 'Beaver Gray Vy Dk', rgb: [ 110, 101, 92 ] },
		{ dmc: 844, color: 'Beaver Gray Ult Dk', rgb: [ 72, 72, 72 ] },
		{ dmc: 762, color: 'Pearl Gray Vy Lt', rgb: [ 236, 236, 236 ] },
		{ dmc: 415, color: 'Pearl Gray', rgb: [ 211, 211, 214 ] },
		{ dmc: 318, color: 'Steel Gray Lt', rgb: [ 171, 171, 171 ] },
		{ dmc: 414, color: 'Steel Gray Dk', rgb: [ 140, 140, 140 ] },
		{ dmc: 168, color: 'Pewter Very Light', rgb: [ 209, 209, 209 ] },
		{ dmc: 169, color: 'Pewter Light', rgb: [ 132, 132, 132 ] },
		{ dmc: 317, color: 'Pewter Gray', rgb: [ 108, 108, 108 ] },
		{ dmc: 413, color: 'Pewter Gray Dark', rgb: [ 86, 86, 86 ] },
		{ dmc: 3799, color: 'Pewter Gray Vy Dk', rgb: [ 66, 66, 66 ] },
		{ dmc: 310, color: 'Black', rgb: [ 0, 0, 0 ] }
	];

	threads = threads.map((thread, i) => {
		// We don't want to use `i` as a key- `dcm` would work great though.
		return <ThreadItem key={i} dmc={threads[i].dmc} color={threads[i].color} rgb={threads[i].rgb} />;
	});

	return <div style={threadCardStyle}>{threads}</div>;
};
const threadCardStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '1rem'
};
export default DmcList;
