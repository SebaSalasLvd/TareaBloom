import { CustomChip } from "../templates/CustomChip";
export const PokemonCard = ({name, types, image}) => {
    return (
        <>
            <div className={'w-full flex justify-center bg-white p-8 rounded-lg shadow-sm border'}>
                <div className={'w-full flex flex-col gap-5'}>
                    <h1 className={'roboto-bold text-3xl'}>{name}</h1>
                    <p className={'text-lg w-full max-w-full'}>Types</p>
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