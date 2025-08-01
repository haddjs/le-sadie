import Image from "next/image";
import { navMenu } from "@/constants/data";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="bg-background p-10 px-35">
			<div className="flex justify-between">
				<div>
					<Link href="/">
						<Image alt="logo" src="/images/logo.svg" height={30} width={60} />
					</Link>
				</div>
				<div className="flex items-center gap-25">
					{navMenu.map((item) => (
						<Link key={item.id} href={item.url}>
							<p className="cursor-pointer font-poppins">{item.title}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
