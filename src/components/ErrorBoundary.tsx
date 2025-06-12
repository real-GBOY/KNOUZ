/** @format */

import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.error("Error caught by boundary:", error, errorInfo);
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return <ErrorFallback error={this.state.error} />;
		}

		return this.props.children;
	}
}

const ErrorFallback: React.FC<{ error?: Error }> = ({ error }) => {
	const { t } = useTranslation();

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='text-center p-8 bg-white rounded-lg shadow-lg max-w-md'>
				<h1 className='text-2xl font-bold text-red-600 mb-4'>
					{t("error.somethingWentWrong")}
				</h1>
				<p className='text-gray-600 mb-4'>{t("error.pleaseTryAgain")}</p>
				{error && <p className='text-sm text-gray-500 mb-4'>{error.message}</p>}
				<button
					onClick={() => window.location.reload()}
					className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>
					{t("error.refreshPage")}
				</button>
			</div>
		</div>
	);
};

export default ErrorBoundary;
