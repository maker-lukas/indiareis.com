export interface Artwork {
    title: string;
    image: string;
    width: number;
    height: number;
    alt: string;
    category: string;
    year: number;
    description: string;
}

const actualArtworkFiles = [
    { file: 'IMG_1084.jpg', width: 2170, height: 1346 },
    { file: 'IMG_1085.jpg', width: 1502, height: 1882 },
    { file: 'IMG_1086.jpg', width: 1456, height: 2264 },
    { file: 'IMG_1087.jpg', width: 1290, height: 2152 },
    { file: 'IMG_1088.jpg', width: 2055, height: 2854 },
    { file: 'IMG_1089.jpg', width: 1626, height: 2679 },
    { file: 'IMG_1090.jpg', width: 1719, height: 3203 },
    { file: 'IMG_1092.jpg', width: 1173, height: 1075 },
    { file: 'IMG_1093.jpg', width: 2353, height: 2746 },
    { file: 'IMG_1094.jpg', width: 1676, height: 3480 },
    { file: 'IMG_1095.jpg', width: 865, height: 2112 },
    { file: 'IMG_1096.jpg', width: 1946, height: 2617 },
    { file: 'IMG_1097.jpg', width: 1738, height: 2953 },
    { file: 'IMG_1099.jpg', width: 1239, height: 1096 },
    { file: 'IMG_1100.jpg', width: 1971, height: 3331 },
    { file: 'IMG_1102.jpg', width: 1920, height: 3022 },
    { file: 'IMG_1103.jpg', width: 1097, height: 2285 },
    { file: 'IMG_1104.jpg', width: 1680, height: 2931 },
    { file: 'IMG_1105.jpg', width: 2020, height: 1757 },
    { file: 'IMG_1106.jpg', width: 1697, height: 2291 },
    { file: 'IMG_1107.jpg', width: 1699, height: 2688 },
    { file: 'IMG_1108.jpg', width: 877, height: 888 },
    { file: 'IMG_1110.jpg', width: 1512, height: 1019 },
    { file: 'IMG_1111.jpg', width: 1723, height: 2635 },
    { file: 'IMG_1112.jpg', width: 1680, height: 2959 },
    { file: 'IMG_1113.jpg', width: 1596, height: 2417 },
    { file: 'IMG_1114.jpg', width: 1234, height: 1152 },
    { file: 'IMG_1115.jpg', width: 1345, height: 2722 },
    { file: 'IMG_1116.jpg', width: 1148, height: 2075 },
    { file: 'IMG_1117.jpg', width: 1241, height: 1667 },
    { file: 'IMG_1119.jpg', width: 1878, height: 2453 },
    { file: 'IMG_1120.jpg', width: 1544, height: 2363 },
    { file: 'IMG_1121.jpg', width: 1658, height: 2506 },
    { file: 'IMG_1122.jpg', width: 1823, height: 2922 },
    { file: 'IMG_1123.jpg', width: 2761, height: 2174 },
    { file: 'IMG_1125.jpg', width: 1668, height: 1823 },
    { file: 'IMG_1126.jpg', width: 954, height: 1455 },
    { file: 'IMG_1127.jpg', width: 1216, height: 2564 },
    { file: 'IMG_1128.jpg', width: 1695, height: 2638 },
    { file: 'IMG_1129.jpg', width: 1973, height: 2838 },
    { file: 'IMG_1130.jpg', width: 1970, height: 2729 },
    { file: 'IMG_1131.jpg', width: 1856, height: 2744 },
    { file: 'IMG_1132.jpg', width: 1454, height: 1696 },
    { file: 'IMG_1133.jpg', width: 1804, height: 2887 },
    { file: 'IMG_1134.jpg', width: 1807, height: 2588 },
    { file: 'IMG_1135.jpg', width: 1849, height: 2193 },
    { file: 'IMG_1136.jpg', width: 2129, height: 2698 },
    { file: 'IMG_1137.jpg', width: 2663, height: 2164 },
    { file: 'IMG_1138.jpg', width: 2838, height: 1719 },
    { file: 'IMG_1139.jpg', width: 1353, height: 2124 },
    { file: 'IMG_1140.jpg', width: 1138, height: 2149 },
    { file: 'IMG_1141.jpg', width: 1470, height: 2263 },
    { file: 'IMG_1142.jpg', width: 1339, height: 2152 },
    { file: 'IMG_1143.jpg', width: 1838, height: 2143 },
    { file: 'IMG_1145.jpg', width: 1130, height: 1859 },
    { file: 'IMG_1146.jpg', width: 1495, height: 2890 },
    { file: 'IMG_1147.jpg', width: 1573, height: 1961 },
];

export const artworks: Artwork[] = actualArtworkFiles.map(({ file, width, height }, index) => {
    const title = `Artwork ${index + 1}`;

    return {
        title,
        image: `/artworks/${file}`,
        width,
        height,
        alt: `${title}`,
        category: 'Collection',
        year: 2026,
        description: 'Original artwork from the collection.'
    };
});