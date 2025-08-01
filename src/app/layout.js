import { Playfair, Poppins } from "next/font/google";
import "../styles/globals.css";

const playfair = Playfair({
	variable: "--font-playfair",
	subsets: ["latin"],
	weight: ["variable"],
	style: ["italic", "normal"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	style: ["italic", "normal"],
});

export const metadata = {
	title: "Le Sadie",
	description: "Built with Nextjs",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${playfair.variable} ${poppins.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
