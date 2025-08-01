import {
	faWhatsapp,
	faTiktok,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<div className="bg-[#161616] flex justify-between items-center text-white p-6 py-8 px-35">
			<div>
				<span>
					Jl. Purwakarta No.84, Antapani Kidul, Kec. Antapani, Kota Bandung,
					Jawa Barat 40291
				</span>
			</div>
			<div className="flex gap-4">
				<FontAwesomeIcon
					icon={faTiktok}
					width={40}
					height={40}
					className="bg-white text-black rounded-full p-1.5"
				/>
				<FontAwesomeIcon
					icon={faWhatsapp}
					width={40}
					height={40}
					className="bg-white text-black rounded-full p-1.5"
				/>
				<FontAwesomeIcon
					icon={faInstagram}
					width={40}
					height={40}
					className="bg-white text-black rounded-full p-1.5"
				/>
			</div>
		</div>
	);
};

export default Footer;
