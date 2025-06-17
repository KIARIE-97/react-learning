import { useReducer } from "react";
interface ITabs{
    id: number;
    label: string;
    content: string;
}
type tabCounterAction= 
    { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    
    const tabs: ITabs[] = [
			{ id: 0, label: "js", content: "react, angular, hono, nest, next" },
			{ id: 1, label: "python", content: "django, flask, fastAPI" },
			{ id: 2, label: "java", content: "micronaut, spring" },
			{ id: 3, label: "PHP", content: "Laravel, Symfony" },
		];

function tabReducer(state: number, action: tabCounterAction): number {
	switch (action.type) {
		case "INCREMENT":
			return (state + 1) % tabs.length;
		case "DECREMENT":
			return (state - 1 + tabs.length) % tabs.length;
		default:
			return state;
	}
}

function Tabs() {
    const [currentIndex, dispatch] = useReducer(tabReducer, 0);
    const currentTab = tabs[currentIndex];


  return (
		<div className="flex-col m-auto mt-10 w-4/5 bg-amber-400 rounded-2xl shadow-lg p-15">
			<div className="flex justify-between w-full mb-5">
				<button
					className="bg-blue-600 px-5 rounded-sm py-1 cursor-pointer"
					onClick={() => dispatch({ type: "DECREMENT" })}
				>
					-
				</button>
				<button
					className="bg-blue-600 px-5 rounded-sm py-1 cursor-pointer"
					onClick={() => dispatch({ type: "INCREMENT" })}
				>
					+
				</button>
			</div>
			<div className="flex-col   justify-items-center">
				<h3 className="text-[21px] font-bold">{currentTab.label}</h3>
				<p className="font-mono">{currentTab.content}</p>
			</div>
		</div>
	);
}

export default Tabs