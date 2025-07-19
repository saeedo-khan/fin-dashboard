"use client";

import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

interface ClientData {
  name: string;
  email: string;
  company: string;
  address: string;
  avatar?: string;
  isVerified?: boolean;
}

interface ClientDetailsProps {
  client: ClientData;
  onAddCustomer?: () => void;
  onMenuClick?: () => void;
}

export default function ClientDetails({
  client,
  onAddCustomer,
  onMenuClick,
}: ClientDetailsProps) {
  const { theme } = useTheme();

  return (
    <div className="bg-card rounded-lg border border-border space-y-[19px] p-6 w-[375px] h-[299px]">
      <div className="flex items-center justify-between ">
        <h3 className="text-lg font-semibold text-foreground">
          Client Details
        </h3>
        <button
          onClick={onMenuClick}
          className="p-1 hover:bg-muted rounded-full transition-colors duration-200 cursor-pointer"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.96154 11C4.87615 11 4 11.8933 4 13C4 14.1067 4.87615 15 5.96154 15C7.04692 15 7.92308 14.1067 7.92308 13C7.92308 11.8933 7.04692 11 5.96154 11ZM19.0385 11C17.9531 11 17.0769 11.8933 17.0769 13C17.0769 14.1067 17.9531 15 19.0385 15C20.1238 15 21 14.1067 21 13C21 11.8933 20.1238 11 19.0385 11ZM12.5 11C11.4146 11 10.5385 11.8933 10.5385 13C10.5385 14.1067 11.4146 15 12.5 15C13.5854 15 14.4615 14.1067 14.4615 13C14.4615 11.8933 13.5854 11 12.5 11Z"
              fill="#929EAE"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-[15px]">
        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
          {client.avatar ? (
            <Image 
                src={client.avatar}
                alt={client.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <svg
              className="w-6 h-6 text-muted-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          )}
        </div>
        <div className="space-y-[8px]">
          <h4 className="text-lg font-semibold text-foreground">
            {client.name}
          </h4>
          <p className="text-sm text-muted-foreground">{client.email}</p>
        </div>
      </div>

      <div className="w-full h-[1px] rounded bg-grays-3"></div>

      <div className="spacy-y-[8px]">
        <div className="flex items-center gap-2">
          <h5 className="font-semibold text-foreground">{client.company}</h5>
          {client.isVerified && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.374 7.15909L13.4673 6.10575C13.294 5.90575 13.154 5.53242 13.154 5.26575V4.13242C13.154 3.42575 12.574 2.84575 11.8673 2.84575H10.734C10.474 2.84575 10.094 2.70575 9.89397 2.53242L8.84064 1.62575C8.38064 1.23242 7.62731 1.23242 7.16064 1.62575L6.11395 2.53908C5.91395 2.70575 5.53395 2.84575 5.27395 2.84575H4.12061C3.41395 2.84575 2.83395 3.42575 2.83395 4.13242V5.27242C2.83395 5.53242 2.69395 5.90575 2.52728 6.10575L1.62728 7.16576C1.24061 7.62576 1.24061 8.37242 1.62728 8.83242L2.52728 9.89242C2.69395 10.0924 2.83395 10.4658 2.83395 10.7258V11.8658C2.83395 12.5724 3.41395 13.1524 4.12061 13.1524H5.27395C5.53395 13.1524 5.91395 13.2924 6.11395 13.4658L7.16731 14.3724C7.62731 14.7658 8.38064 14.7658 8.84731 14.3724L9.90064 13.4658C10.1006 13.2924 10.474 13.1524 10.7406 13.1524H11.874C12.5806 13.1524 13.1606 12.5724 13.1606 11.8658V10.7324C13.1606 10.4724 13.3006 10.0924 13.474 9.89242L14.3806 8.83909C14.7673 8.37909 14.7673 7.61909 14.374 7.15909ZM10.774 6.73909L7.55397 9.95909C7.46064 10.0524 7.33397 10.1058 7.20064 10.1058C7.06731 10.1058 6.94064 10.0524 6.84731 9.95909L5.23395 8.34576C5.04061 8.15242 5.04061 7.83242 5.23395 7.63909C5.42728 7.44576 5.74728 7.44576 5.94061 7.63909L7.20064 8.89909L10.0673 6.03242C10.2606 5.83908 10.5806 5.83908 10.774 6.03242C10.9673 6.22575 10.9673 6.54575 10.774 6.73909Z" fill="#2F80ED"/>
            </svg>
            
          )}
        </div>
        <p className="text-sm text-muted-foreground">{client.address}</p>
      </div>
      

      <button
        onClick={onAddCustomer}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${
          theme === "dark"
            ? "bg-secondary/20 text-primary hover:bg-secondary/30"
            : "bg-[#EEFEF2] text-secondary hover:bg-secondary/20"
        }`}
      >
        Add Customer
      </button>
    </div>
  );
}
