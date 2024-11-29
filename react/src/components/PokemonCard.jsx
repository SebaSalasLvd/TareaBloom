import { CustomChip } from "../templates/CustomChip";
export const PokemonCard = ({name, types, image}) => {
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <>
            <div className={'w-full flex justify-center bg-white p-8 rounded-lg shadow-sm border'}>
                <div className={'w-full flex flex-col gap-5'}>
                    <h1 className={'font-serif text-4xl'}>{capitalizeFirstLetter(name)}</h1>
                    <div className={'flex flex-col gap-2'}>
                        <div className="flex justify-start gap-2">
                            {types.map((data, idx) => (
                                <CustomChip
                                    key = {idx}
                                    type = {data.type}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Image" />
                    </div>
                </div>
            </div>
        </>
    );
}