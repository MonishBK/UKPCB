import WelcomeText from "./publicView/Components/WelcomeText";
// import { PDFjson } from "./publicView/JsonFiles/PDFjson";
import { TableJson } from "./publicView/JsonFiles/TableJson";
import About from "./publicView/Pages/About";
import ActionPlanRiverStretches from "./publicView/Pages/ActionPlanRiverStretches";
import ContactUs from "./publicView/Pages/ContactUs";
import PhotoGallery from "./publicView/Pages/Photogallery";
import PublicHearing from "./publicView/Pages/PublicHearing";
import RelatedLinks from "./publicView/Pages/RelatedLinks";
import Pdf_ListContainer from "./publicView/Pdf_ListContainer";
import TableContent from "./publicView/TableContent";

// const PDFjson = `${import.meta.env.VITE_APP_PDFJSONFILE_URL}`

// const PDFjson = async() =>{
// 	try {
// 		const res = await fetch(`${import.meta.env.VITE_APP_PDFJSONFILE_URL}`, {
// 		  method: 'GET',
// 		  headers: {
// 			"Content-Type": "application/json",
// 		  },
// 		  credentials: 'include',
// 		});
  
// 		if (!res.ok) {
// 		  throw new Error('Failed to upload file');
// 		}
  
// 		const data = await res.json();

// 		console.log(res.status, data)
// 		if(res.status === 200) {
// 			return data
// 		}
// 	  } catch (error) {
// 		console.error('Error uploading file:', error);
// 	  }
// }

// console.log("pdf data => ",PDFjson())

export const RoutesJson = [
	// if hasSubItem true then  contentType & data will be empty
	{
		id: 1,
		name: "Quality Standards",
		path: "61-quality-standards",
		hasSubItem: true,
		parent_id: null,
		component: "", 
	},
	{
		id: 2,
		name: "Air Pollution",
		path: "71-air-polution",
		hasSubItem: false,
		parent_id: 1,
		component: Pdf_ListContainer,
		componentProps: { title: "Air Pollution", data: "Air Pollution" },
	},
	{
		id: 3,
		name: "Water Pollution",
		path: "72-water-polution",
		hasSubItem: false,
		parent_id: 1,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Water Pollution",
			data: "Water Pollution",
		},
	},
	{
		id: 4,
		name: "Noise Pollution",
		path: "73-noise--polution",
		hasSubItem: false,
		parent_id: 1,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Noise Pollution",
			data: "Noise Pollution", 
		},
	},
	{
		id: 5,
		name: "Vehicular Pollution",
		path: "74-vehicular-polution",
		hasSubItem: false,
		parent_id: 1,
		component: TableContent,
		componentProps: {
			title: "Vehicular Pollution",
			data: TableJson["Vehicular Pollution"],
		},
	},
	{
		id: 6,
		name: "Industry",
		path: "75-industry",
		hasSubItem: true,
		parent_id: 1,
		component: "",
	},
	{
		id: 6_1,
		name: "Effluent",
		path: "76-effluent",
		hasSubItem: false,
		parent_id: 6,
		component: TableContent,
		componentProps: { title: "Effluent", data: TableJson["Effluent"] },
	},
	{
		id: 6_2,
		name: "Emission",
		path: "78-emission",
		hasSubItem: false,
		parent_id: 6,
		component: TableContent,
		componentProps: { title: "Emission", data: TableJson["Emission"] },
	},
	{
		id: 6_3,
		name: "General Standards",
		path: "general-standards",
		hasSubItem: false,
		parent_id: 6,
		component: Pdf_ListContainer,
		componentProps: {
			title: "General Standards",
			data: "General Standards",
		},
	},
	{
		id: 7,
		name: "CETP-Inlet standards",
		path: "151-cetp-inlet-standards-",
		hasSubItem: false,
		parent_id: 1,
		component: Pdf_ListContainer,
		componentProps: {
			title: "CETP-Inlet standards",
			data: "CETP-Inlet standards",
		},
	},
	{
		id: 8,
		name: "Brick Klins",
		path: "219-brick-klins",
		hasSubItem: false,
		parent_id: 1,
		component: Pdf_ListContainer,
		componentProps: { title: "Brick Klins", data: "Brick Klins" },
	},
	{
		id: 9,
		name: "Consent Management",
		path: "62-consent-management",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 10,
		name: "Fee Consent",
		path: "78-fee-consent",
		hasSubItem: false,
		parent_id: 9,
		component: Pdf_ListContainer,
		componentProps: { title: "Fee Consent", data: "Fee Consent" },
	},
	{
		id: 11,
		name: "Related Orders",
		path: "82-related-orders",
		hasSubItem: false,
		parent_id: 9,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Related Orders",
			data: "Related Orders",
		},
	},
	{
		id: 12,
		name: "Data Bank",
		path: "64-data-bank",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 13,
		name: "Air Quality Data",
		path: "95-air-quality-data",
		hasSubItem: false,
		parent_id: 12,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Air Quality Data",
			data: "Air Quality Data",
		},
	},
	{
		id: 14,
		name: "Water Quality Data",
		path: "96-water-quality-data",
		hasSubItem: true,
		parent_id: 12,
		component: "",
	},
	{
		id: 15,
		name: "Water Quality of River Ganga Pre-Post (Major Snans)",
		path: "206-water-quality-of-river-ganga-pre-post-(major-snans)",
		hasSubItem: false,
		parent_id: 14,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Water Quality of River Ganga Pre-Post (Major Snans)",
			data: "Water Quality of River Ganga Pre-Post (Major Snans)",
		},
	},
	{
		id: 16,
		name: "Noise Data",
		path: "97-noise-data",
		hasSubItem: false,
		parent_id: 12,
		component: Pdf_ListContainer,
		componentProps: { title: "Noise Data", data: "Noise Data" },
	},
	{
		id: 17,
		name: "AQI-Weekly Data",
		path: "98-aqi-weekly-data",
		hasSubItem: false,
		parent_id: 12,
		component: Pdf_ListContainer,
		componentProps: {
			title: "AQI-Weekly Data",
			data: "AQI-Weekly Data",
		},
	},
	{
		id: 18,
		name: "Ground Water",
		path: "100-ground-water",
		hasSubItem: false,
		parent_id: 12,
		component: Pdf_ListContainer,
		componentProps: { title: "Ground Water", data: "Ground Water" },
	},
	{
		id: 19,
		name: "Sewage Treatment Plant (STP)",
		path: "184-sewage-treatment-plant-(stp)",
		hasSubItem: false,
		parent_id: 12,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Sewage Treatment Plant (STP)",
			data: "Sewage Treatment Plant (STP)",
		},
	},
	{
		id: 20,
		name: "Employee",
		path: "70-employee",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 21,
		name: "Head Office",
		path: "87-head-office",
		hasSubItem: false,
		parent_id: 20,
		component: TableContent,
		componentProps: { title: "Head Office", data: TableJson["Head Office"] },
	},
	{
		id: 22,
		name: "Regional Offices",
		path: "143-regional-offices",
		hasSubItem: true,
		parent_id: 20,
		component: "",
	},
	{
		id: 23,
		name: "Regional Office,Dehradun",
		path: "88-regional-office,dehradun",
		hasSubItem: false,
		parent_id: 22,
		component: TableContent,
		componentProps: {
			title: "Regional Office,Dehradun",
			data: TableJson["Regional Office,Dehradun"],
		},
	},
	{
		id: 24,
		name: "Regional Office, Kashipur",
		path: "139-regional-office,-kashipur",
		hasSubItem: false,
		parent_id: 22,
		component: TableContent,
		componentProps: {
			title: "Regional Office, Kashipur",
			data: TableJson["Regional Office, Kashipur"],
		},
	},
	{
		id: 25,
		name: "Regional Office, Roorkee",
		path: "138-regional-office,-roorkee",
		hasSubItem: false,
		parent_id: 22,
		component: TableContent,
		componentProps: {
			title: "Regional Office, Roorkee",
			data: TableJson["Regional Office, Roorkee"],
		},
	},
	{
		id: 26,
		name: "Regional Office,Haldwani",
		path: "89-regional-office,haldwani",
		hasSubItem: false,
		parent_id: 22,
		component: TableContent,
		componentProps: {
			title: "Regional Office,Haldwani",
			data: TableJson["Regional Office,Haldwani"],
		},
	},
	{
		id: 27,
		name: "Direction under Air/Water/EP Act",
		path: "35-direction-under-air-water-ep-act",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Direction under Air/Water/EP Act",
			data: "Direction under Air/Water/EP Act",
		},
	},
	{
		id: 28,
		name: "Photo Gallery",
		path: "photo-gallery",
		hasSubItem: false,
		parent_id: null,
		component: PhotoGallery,
	},
	{
		id: 29,
		name: "Related Links",
		path: "/weblinks",
		hasSubItem: false,
		parent_id: null,
		component: RelatedLinks,
	},
	{
		id: 30,
		name: "Guidelines",
		path: "/contents/listing/7/145-guidelines",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: { title: "Guidelines", data: "Guidelines" },
	},
	{
		id: 31,
		name: "List of Authorized Recyclers",
		path: "147-list-of-authorized-recyclers",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 32,
		name: "E-Waste",
		path: "187-e-waste",
		hasSubItem: false,
		parent_id: 31,
		component: Pdf_ListContainer,
		componentProps: { title: "E-Waste", data: "E-Waste"},
	},
	{
		id: 33,
		name: "Hazardous Waste",
		path: "216-hazardous-waste",
		hasSubItem: false,
		parent_id: 31,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Hazardous Waste",
			data: "Hazardous Waste",
		},
	},
	{
		id: 34,
		name: "Plastic Waste",
		path: "222-plastic-waste",
		hasSubItem: false,
		parent_id: 31,
		component: Pdf_ListContainer,
		componentProps: { title: "Plastic Waste", data: "Plastic Waste" },
	},
	{
		id: 35,
		name: "SOP for Recycling/Reprocessing & Reuse of the Materials",
		path: "10/152-sop-for-recycling-reprocessing-reuse-of-the-materials",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Standard Operating Procedure",
			data: "Standard Operating Procedure",
		},
	},
	{
		id: 36,
		name: "Hazardous Waste_SOP under Rule 9",
		path: "223-hazardous-waste_sop-under-rule-9",
		hasSubItem: false,
		parent_id: 35,
		component: Pdf_ListContainer,
		componentProps: {
			title: "SOP under Rule 9 _Hazardous Waste",
			data: "SOP under Rule 9 _Hazardous Waste",
		},
	},
	{
		id: 37,
		name: "River Rejuvenation Committee, Uttarakhand.",
		path: "166-river-rejuvenation-committee,-uttarakhand.",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 38,
		name: "Action Plan for Rejuvenation of Polluted River Stretch",
		path: "167-action-plan-for-rejuvenation-of-polluted-river-stretch",
		hasSubItem: false,
		parent_id: 37,
		component: ActionPlanRiverStretches,
	},
	{
		id: 39,
		name: "Water Quality of Polluted River Stretch",
		path: "168-water-quality-of-polluted-river-stretch",
		hasSubItem: false,
		parent_id: 37,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Water Quality of Polluted River Stretch",
			data: "Water Quality of Polluted River Stretch",
		},
	},
	{
		id: 40,
		name: "Order of Hon'ble NGT",
		path: "169-order-of-honble-ngt",
		hasSubItem: false,
		parent_id: 37,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Order of Hon'ble NGT",
			data: "Order of Hon'ble NGT",
		},
	},
	{
		id: 41,
		name: "Letter/Notices etc",
		path: "170-letter-notices-etc",
		hasSubItem: false,
		parent_id: 37,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Letter/Notices etc",
			data: "Letter/Notices etc",
		},
	},
	{
		id: 42,
		name: "RRC, Uttarakhand-Minutes of Meeting",
		path: "182-rrc,-uttarakhand-minutes-of-meeting",
		hasSubItem: false,
		parent_id: 37,
		component: Pdf_ListContainer,
		componentProps: {
			title: "RRC, Uttarakhand-Minutes of Meeting",
			data: "RRC, Uttarakhand-Minutes of Meeting",
		},
	},
	{
		id: 43,
		name: "Directions",
		path: "203-directions",
		hasSubItem: false,
		parent_id: 37,
		component: Pdf_ListContainer,
		componentProps: { title: "Directions", data: "Directions" },
	},
	{
		id: 44,
		name: "Reports by SPCBs",
		path: "171-reports-by-spcbs",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 45,
		name: "Annual Reports by State Pollution Control Board",
		path: "172-annual-reports-by-state-pollution-control-board",
		hasSubItem: false,
		parent_id: 44,
		component: Pdf_ListContainer,
		componentProps: { title: "Anual Report", data: "Anual Report" },
	},
	{
		id: 46,
		name: "Annual Reports under Various Rules",
		path: "174-annual-reports-under-various-rules",
		hasSubItem: true,
		parent_id: 44,
		component: "",
	},
	{
		id: 47,
		name: "BMW Reports",
		path: "176-bmw-reports",
		hasSubItem: false,
		parent_id: 46,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Bio-Medical Waste Management Reports",
			data: "Bio-Medical Waste Management Reports",
		},
	},
	{
		id: 48,
		name: "MSW Reports",
		path: "177-msw-reports",
		hasSubItem: false,
		parent_id: 46,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Municipal Solid Waste Reports",
			data: "Municipal Solid Waste Reports",
		},
	},
	{
		id: 49,
		name: "E-waste",
		path: "178-e-waste",
		hasSubItem: false,
		parent_id: 46,
		component: Pdf_ListContainer,
		componentProps: {
			title: "E-Waste Reports",
			data: "E-Waste Reports",
		},
	},
	{
		id: 50,
		name: "Plastic Waste",
		path: "179-plastic-waste",
		hasSubItem: false,
		parent_id: 46,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Plastic Waste Reports",
			data: "Plastic Waste Reports",
		},
	},
	{
		id: 51,
		name: "Hazardous Waste",
		path: "180-hazardous-waste-",
		hasSubItem: false,
		parent_id: 46,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Hazardous Waste Reports",
			data: "Hazardous Waste Reports",
		},
	},
	{
		id: 52,
		name: "Construction & Demolition Waste",
		path: "209-construction-demolition-waste-",
		hasSubItem: false,
		parent_id: 46,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Construction and Demolition Waste",
			data: "Construction and Demolition Waste",
		},
	},
	{
		id: 53,
		name: "Battery Waste",
		path: "211-battery-waste",
		hasSubItem: false,
		parent_id: 46,
		component: Pdf_ListContainer,
		componentProps: { title: "Battery Waste", data: "Battery Waste" },
	},
	{
		id: 54,
		name: "Technical Reports",
		path: "175-technical-reports",
		hasSubItem: false,
		parent_id: 44,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Reports Prepared By State Pollution Control Board",
			data: "Reports Prepared By State Pollution Control Board",
		},
	},
	{
		id: 55,
		name: "SoE Report",
		path: "181-soe-report",
		hasSubItem: false,
		parent_id: 44,
		component: Pdf_ListContainer,
		componentProps: { title: "SoE Report", data: "SoE Report" },
	},
	{
		id: 56,
		name: "Air Action Plan",
		path: "183-air-action-plan",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: {
			title: "City Air Action Plan",
			data: "City Air Action Plan",
		},
	},
	{
		id: 57,
		name: "DISPLAY BOARD FOR HAZARDOUS WASTE/ENVIRONMENTAL DATA",
		path: "185-display-board-for-hazardous-waste-environmental-data",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Environmental Data for Haz. Display Board",
			data: "Environmental Data for Haz. Display Board",
		},
	},
	{
		id: 58,
		name: "Reports by CPCB",
		path: "204-reports-by-cpcb",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Reports prepared by CPCB",
			data: "Reports prepared by CPCB",
		},
	},
	{
		id: 59,
		name: "Inspection Reports in Compliance to Court Orders",
		path: "212-inspection-reports-in-compliance-to-court-orders",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 60,
		name: "Inspection Reports",
		path: "214-inspection-reports",
		hasSubItem: true,
		parent_id: 59,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Inspection Reports",
			data: "Inspection Reports",
		},
	},
	{
		id: 61,
		name: "Directions Issued",
		path: "215-directions-issued",
		hasSubItem: false,
		parent_id: 60,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Directions Issued",
			data: "Directions Issued",
		},
	},
	{
		id: 62,
		name: "Draft-District Environment Plan/State Environment Plan",
		path: "218-draft-district-environment-plan-state-environment-plan",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Draft-District Environment Plan/State Environment Plan",
			data: "Draft-District Environment Plan/State Environment Plan",
		},
	},
	{
		id: 63,
		name: "Mission LiFE",
		path: "227-mission-life",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: { title: "Mission LiFE", data: "Mission LiFE" },
	},

	// =========================================================================
	// main menu ===============================================================
	// {
	// 	id: 64,
	// 	name: "Home",
	// 	path: "/",
	// 	hasSubItem: false,
	// 	parent_id: null,
	// 	component: "",
	// },
	{
		id: 65,
		name: "About Us",
		path: "about-us",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 66,
		name: "Constitution of Board",
		path: "133-constitution-of-board",
		hasSubItem: false,
		parent_id: 65,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Constitution of Board",
			data: "Constitution of Board",
		},
	},
	{
		id: 67,
		name: "Duties & Function of Board",
		path: "134-duties-function-of-board",
		hasSubItem: true,
		parent_id: 65,
		component: "",
	},
	{
		id: "67-001",
		name: "Water (Prevention & Control of Pollution) Act 1974",
		path: "pages/view/17/24-municipal-solid-wastes-(management-and-handling)-rules,-2000",
		hasSubItem: false,
		parent_id: 67,
		component: TableContent,
		componentProps: {
			title: "Water (Prevention & Control of Pollution) Act 1974",
			data: TableJson["Water (Prevention & Control of Pollution) Act 1974"],
		},
	},
	{
		id: "67-002",
		name: "Air (Prevention & Control of Pollution) Act 1981",
		path: "pages/view/17/24-municipal-solid-wastes-(management-and-handling)-rules,-2000",
		hasSubItem: false,
		parent_id: 67,
		component: TableContent,
		componentProps: {
			title: "Air (Prevention & Control of Pollution) Act 1981",
			data: TableJson["Air (Prevention & Control of Pollution) Act 1981"],
		},
	},
	{
		id: "67-003",
		name: "Hazardous Wastes (Management and Handling) Rules, 1998",
		path: "pages/view/17/24-municipal-solid-wastes-(management-and-handling)-rules,-2000",
		hasSubItem: false,
		parent_id: 67,
		component: TableContent,
		componentProps: {
			title: "Hazardous Wastes (Management and Handling) Rules, 1998",
			data: TableJson["Hazardous Wastes (Management and Handling) Rules, 1998"],
		},
	},
	{
		id: "67-004",
		name: "Bio-Medical Waste (Management and Handling) Rules, 1998",
		path: "pages/view/17/24-municipal-solid-wastes-(management-and-handling)-rules,-2000",
		hasSubItem: false,
		parent_id: 67,
		component: TableContent,
		componentProps: {
			title: "Bio-Medical Waste (Management and Handling) Rules, 1998",
			data: TableJson["Bio-Medical Waste (Management and Handling) Rules, 1998"],
		},
	},
	{
		id: "67-005",
		name: "Municipal Solid Wastes (Management and Handling) Rules, 2000",
		path: "pages/view/17/24-municipal-solid-wastes-(management-and-handling)-rules,-2000",
		hasSubItem: false,
		parent_id: 67,
		component: TableContent,
		componentProps: {
			title: "Municipal Solid Wastes (Management and Handling) Rules, 2000",
			data: TableJson["Municipal Solid Wastes (Management and Handling) Rules, 2000"],
		},
	},
	{
		id: "67-006",
		name: "Noise Pollution (Regulation and Control) Rules, 2000",
		path: "pages/view/17/25-noise-pollution(regulation-and-control)-rules,-2000",
		hasSubItem: false,
		parent_id: 67,
		component: TableContent,
		componentProps: {
			title: "Noise Pollution (Regulation and Control) Rules, 2000",
			data: TableJson["Noise Pollution (Regulation and Control) Rules, 2000"],
		},
	},
	{
		id: "67-007",
		name: "The Environment (Protection) Act 1986",
		path: "pages/view/17/26-the-environment-(protection)-act-1986",
		hasSubItem: false,
		parent_id: 67,
		component: TableContent,
		componentProps: {
			title: "The Environment (Protection) Act 1986",
			data: TableJson["The Environment (Protection) Act 1986"],
		},
	},
	{
		id: 68,
		name: "Members of Board",
		path: "135-members-of-board",
		hasSubItem: false,
		parent_id: 65,
		component: TableContent,
		componentProps: {
			title: "Members of Board",
			data: TableJson["Members of Board"],
		},
	},
	{
		id: 69,
		name: "Board Offices",
		path: "136-board-offices",
		hasSubItem: false,
		parent_id: 65,
		component: TableContent,
		componentProps: {
			title: "Board Offices",
			data: TableJson["Board Offices"],
		},
	},
	{
		id: 70,
		name: "World Environment Day",
		path: "7-world-environment-day",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 71,
		name: "World Environment Day 2022",
		path: "220-world-environment-day-2022",
		hasSubItem: false,
		parent_id: 70,
		component: Pdf_ListContainer,
		componentProps: {
			title: "World Environment Day",
			data: "World Environment Day",
		},
	},
	{
		id: 72,
		name: "Board Meeting",
		path: "53-board-meetings",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Board Meeting",
			data: "Board Meeting",
		},
	},
	{
		id: 73,
		name: "Orders",
		path: "210-orders",
		hasSubItem: false,
		parent_id: 72,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Board Meeting Office Orders",
			data: "Board Meeting Office Orders",
		},
	},
	{
		id: 74,
		name: "Budget",
		path: "54-budget",
		hasSubItem: false,
		parent_id: null,
		component: Pdf_ListContainer,
		componentProps: {
			title: "Board Meeting Office Orders",
			data: "Board Meeting Office Orders",
		},
	},
	{
		id: 75,
		name: "Mission LiFE",
		path: "55-mission-life",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 76,
		name: "Brouchre Mission LiFE",
		path: "225-brouchre--mission-life",
		hasSubItem: false,
		parent_id: 75,
		component: Pdf_ListContainer,
		componentProps: { title: "Broucher", data: "Broucher" },
	},
	{
		id: 77,
		name: "LiFE Theme",
		path: "226-life-theme",
		hasSubItem: false,
		parent_id: 75,
		component: Pdf_ListContainer,
		componentProps: { title: "Mission LiFE", data: "Mission LiFE" },
	},
	{
		id: 78,
		name: "Contact Us",
		path: "contact-us",
		hasSubItem: false,
		parent_id: null,
		component: ContactUs,
	},
	{
		id: 79,
		name: "Right To Information(RTI)",
		path: "111-right-to-information(rti)",
		hasSubItem: true,
		parent_id: null,
		component: "",
	},
	{
		id: 80,
		name: "RTI Act 2005",
		path: "112-rti-act-2005",
		hasSubItem: false,
		parent_id: 79,
		component: Pdf_ListContainer,
		componentProps: { title: "RTI Act 2005", data: "RTI Act 2005" },
	},
	{
		id: 81,
		name: "Information Offices",
		path: "113-information-offices",
		hasSubItem: false,
		parent_id: 79,
		component: TableContent,
		componentProps: {
			title: "Information Offices",
			data: TableJson["Information Offices"],
		},
	},
	{
		id: 82,
		name: "Appellate Authority",
		path: "114-appellate-authority",
		hasSubItem: false,
		parent_id: 79,
		component: TableContent,
		componentProps: {
			title: "Appellate Authority",
			data: TableJson["Appellate Authority"],
		},
	},
	{
		id: 83,
		name: "Manuals",
		path: "115-manuals",
		hasSubItem: false,
		parent_id: 79,
		component: Pdf_ListContainer,
		componentProps: { title: "RTI Manuals", data: "RTI Manuals" },
	},
	{
		id: 84,
		name: "Public Hearing",
		path: "66-public-hearing",
		hasSubItem: false,
		parent_id: null,
		component:  PublicHearing,
	},
];
